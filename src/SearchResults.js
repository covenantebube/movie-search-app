// SearchResults.js
import React from 'react';
import { Link } from 'react-router-dom';
import './SearchResults.css';

const SearchResults = ({ results, onSelectMovie, searchHistory }) => {
  return (
    <div className="search-results">
      <h2>Search Results</h2>
      <ul className="result-list">
        {results.map((movie, index) => (
          <li key={movie.imdbID}>
            <Link to={`/movie/${movie.imdbID}`} onClick={() => onSelectMovie(movie.imdbID)} className="result-link">
              {index + 1}. {movie.title} ({movie.year})
            </Link>
          </li>
        ))}
      </ul>
      <h2 className="search-history-header">Search History</h2>
      <ul className="search-history-list">
        {searchHistory.map((historyItem, index) => (
          <li key={index}>{historyItem.searchTerm}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
