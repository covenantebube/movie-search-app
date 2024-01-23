// SearchBar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      onSearch(searchTerm);
      navigate('/search');
    }
  };

  return (
    <div className="search-container">
      <h1 className="app-name">Movie App</h1>
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search for a movie"
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
