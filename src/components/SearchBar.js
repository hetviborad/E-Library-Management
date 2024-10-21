import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search recipes"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="border p-6 rounded mb-8"
    />
  );
};

export default SearchBar;
