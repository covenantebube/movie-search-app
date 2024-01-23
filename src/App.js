// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import MovieDetails from './MovieDetails';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);

  const handleSearch = async (title) => {
    try {
      const response = await axios.get(`https://localhost:7247/Movie/search/${title}`);
      const data = response.data;
  
      if (data && data.searchResult) {
        setSearchResults([data.searchResult]);
        setError(null);
      } else {
        setSearchResults([]);
        setError(data.errorMessage || 'No search results found.');
      }
  
      setSearchHistory(data.searchHistory || []);
  
      console.log(data.searchHistory);
    } catch (error) {
      console.error('Error searching movies:', error);
      setError('An error occurred while searching for movies.');
    }
  };

  const handleSelectMovie = async (imdbID) => {
    try {
      const response = await axios.get(`https://localhost:7247/Movie/details/${imdbID}`);
      setSelectedMovie(response.data);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={<SearchBar onSearch={handleSearch} />}
          />
          <Route
            path="/search"
            element={
              <div>
                {error && <div>Error: {error}</div>}
                {searchResults.length > 0 ? (
                  <SearchResults results={searchResults} 
                  
                  onSelectMovie={handleSelectMovie}
                  searchHistory={searchHistory}
                  />
                ) : (
                  <div>No search results found.</div>
                )}
              </div>
            }
          />
          <Route
            path="/movie/:imdbID"
            element={selectedMovie && <MovieDetails details={selectedMovie} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
