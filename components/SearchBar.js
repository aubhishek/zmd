// components/SearchBar.js

import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    // Pass the query to the parent component or perform search logic here
    onSearch(query);
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
        className="p-2 border border-gray-300 rounded mr-2"
      />
      <button onClick={handleSearch} className="p-2 bg-gray-800 text-white rounded">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
