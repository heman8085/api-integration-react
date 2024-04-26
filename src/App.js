import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch("https://www.omdbapi.com/?s=Batman&apikey=57b475c3");
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await response.json();
       
        setMovies(data.Search);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="app">
      <header>
        <h1>Movie Search</h1>
      </header>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  );
}

export default App;
