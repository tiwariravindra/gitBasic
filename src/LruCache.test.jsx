
import { describe, expect, it, test } from "vitest";



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
// Jest test cases
describe('LRU Cache', () => {
    it('should return null for a missing key', () => {
        const lruCache = createLRUCache(3);
        expect(lruCache.get('non-existent-key')).toBe(null);
    });

    it('should add and retrieve a single item', () => {
        const lruCache = createLRUCache(3);
        lruCache.put('key1', 'value1');
        expect(lruCache.get('key1')).toBe('value1');
    });

    it('should evict the least recently used item when capacity is reached', () => {
        const lruCache = createLRUCache(3);
        lruCache.put('key1', 'value1');
        lruCache.put('key2', 'value2');
        lruCache.put('key3', 'value3');
        lruCache.get('key1'); // Mark 'key1' as recently used
        lruCache.put('key4', 'value4'); // This should evict 'key2'
        expect(lruCache.get('key2')).toBe(null);
        expect(lruCache.get('key3')).toBe('value3');
        expect(lruCache.get('key1')).toBe('value1');
        expect(lruCache.get('key4')).toBe('value4');
    });

    it('should update the value and mark the key as recently used', () => {
        const lruCache = createLRUCache(3);
        lruCache.put('key1', 'value1');
        lruCache.put('key2', 'value2');
        lruCache.put('key1', 'newValue1'); // Update 'key1'
        lruCache.put('key3', 'value3');
        lruCache.put('key4', 'value4'); // This should evict 'key2'
        expect(lruCache.get('key1')).toBe('newValue1');
        expect(lruCache.get('key2')).toBe(null);
        expect(lruCache.get('key3')).toBe('value3');
        expect(lruCache.get('key4')).toBe('value4');
    });

    it('should handle a series of gets and puts correctly', () => {
        const lruCache = createLRUCache(3);
        lruCache.put('key1', 'value1');
        lruCache.put('key2', 'value2');
        lruCache.put('key3', 'value3');
        lruCache.get('key1'); // Mark 'key1' as recently used
        lruCache.put('key4', 'value4'); // This should evict 'key2'
        lruCache.get('key3'); // Mark 'key3' as recently used
        lruCache.put('key5', 'value5'); // This should evict 'key1'
        expect(lruCache.get('key1')).toBe(null);
        expect(lruCache.get('key2')).toBe(null);
        expect(lruCache.get('key3')).toBe('value3');
        expect(lruCache.get('key4')).toBe('value4');
        expect(lruCache.get('key5')).toBe('value5');
    });
});
