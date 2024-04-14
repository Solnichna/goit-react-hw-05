import { useEffect, useState } from "react";
import MovieList from '../../components/movieList/MovieList.jsx';
import { fetchFamousMovies } from "../../components/api/apiFamous.js";

const HomePage = () => {
 
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        
        const resListMovies = await fetchFamousMovies();
        setMovies(resListMovies);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <ul className="home">
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </ul>
  );
};

export default HomePage;
