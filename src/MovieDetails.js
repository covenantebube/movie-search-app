// MovieDetails.js
import React from 'react';
import './MovieDetails.css';

const MovieDetails = ({ details }) => {
  // Check if details or detailedInfo is null or undefined
  if (!details || !details.detailedInfo) {
    return <div>No movie details available.</div>;
  }

  const {
    title,
    year,
    plot,
    director,
    imdbRating,
    poster,
  } = details.detailedInfo;

  return (
    <div className="container">
      <div className="movie-details">
        <h2>{title} ({year})</h2>
        <img src={poster} alt={`${title} Poster`} />
        <p>{plot}</p>
        <p>Director: {director}</p>
        <p>IMDb Rating: {imdbRating}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
