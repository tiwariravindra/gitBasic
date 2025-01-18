import React, { useState, useTransition } from 'react';

const App = () => {
  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [isPending, startTransition] = useTransition();

  const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    // Non-urgent update wrapped in startTransition
    startTransition(() => {
      const results = items.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredItems(results);
    });
  };

  return (
    <div>
      <h1>Search Items</h1>
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search..."
      />
      {isPending && <p>Loading...</p>}
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
