import React, { useState } from 'react';
import SearchBar from './SearchBar';
import RestaurantTable from './RestaurantTable';

export default function FilterableProductTable() {
  const [filterText, setFilterText] = useState('');

  const handleSearch = (text: string) => {
    setFilterText(text);
  };

  return (
    <>
      <h1>간단한 키오스크</h1>
      <SearchBar onSearch={handleSearch} />
      <RestaurantTable filterText={filterText} />
    </>
  );
}