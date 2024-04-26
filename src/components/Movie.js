import React from "react";
import "./Movie.css";

const Movie = ({ movie }) => {
  return (
    <li className="movie">
      <img src={movie.Poster} alt={movie.Title} />
      <h2>{movie.Title}</h2>
      <h3>{movie.Year}</h3>
     
    </li>
  );
};

export default Movie;
