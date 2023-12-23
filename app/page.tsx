import React from 'react';
import Image from 'next/image';
import SearchBar from '../components/SearchBar';

export default function Home() {
  
  const handleSearch = (query) => {
    // Implement your search logic here based on the query
    console.log('Search query:', query);
  };
    
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      {/*<SearchBar onSearch={handleSearch} />*/}

      <div className="fixed top-8 left-1/2 transform -translate-x-1/2 flex place-items-center gap-2 p-8">
        <Image
          src="/zmd.svg"
          alt="zmd Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
      </div>
    </main>
  );
}
