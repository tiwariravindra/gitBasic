
const createLRUCache = (limit) => {
    const cache = new Map();

    const get = (key) => {
        if (!cache.has(key)) {
            return null; // Cache miss
        }

        // Move the key to the end to mark it as recently used
        const value = cache.get(key);
        cache.delete(key);
        cache.set(key, value); // Re-insert key to the end
        return value;
    };

    const put = (key, value) => {
        if (cache.has(key)) {
            // Remove the key so that it will be added to the end
            cache.delete(key);
        } else if (cache.size === limit) {
            // Remove the least recently used item (first item in the map)
            const firstKey = cache.keys().next().value;
            cache.delete(firstKey);
        }
        cache.set(key, value); // Insert key to the end
    };

    return {
        get,
        put
    };
};

//export default createLRUCache;