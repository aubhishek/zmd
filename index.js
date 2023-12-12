// pages/index.js
import React, { useState } from 'react';

export default function Home() {
  const [query, setQuery] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault();
    // Call your API here with the search query
    const response = await fetch(`/api/search?query=${query}`);
    const data = await response.json();
    console.log(data); // Process and display this data
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Search for a disease..." 
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
