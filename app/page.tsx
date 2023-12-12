import Image from 'next/image';
import React, { useState } from 'react';

export default function Home() {
  // State to hold the search query
  const [query, setQuery] = useState('');

  // Function to handle the search submission
  const handleSearch = async (event) => {
    event.preventDefault();
    // Here you would handle the search logic, e.g., calling an API with the query
    console.log('Search query:', query);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Search Bar Section */}
      <div className="search-bar-container my-8">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a disease..."
            className="search-input"
          />
          <button type="submit" className="search-button">Search</button>
        </form>
      </div>

      {/* Remaining sections of your page */}
      {/* ... other code ... */}

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {/* ... links and other content ... */}
      </div>
    </main>
  );
}
