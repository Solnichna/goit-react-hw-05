
import MovieList from '../../components/movieList/MovieList';

import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const HomePage = () => {
  
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const resListMovies = await fetchFamousMovies();
        
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <ul className="home">
      <h1>Trending today</h1>
      <MovieList />
    </ul>
  );
};

export default HomePage;