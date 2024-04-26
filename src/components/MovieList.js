import React from "react";
import Movie from "./Movie";
import "./MovieList.css";

const MovieList = ({ movies }) => {
  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
};

export default MovieList;
