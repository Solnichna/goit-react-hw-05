import { useEffect, useReducer } from "react";
import MovieList from '../../components/movieList/MovieList.jsx';
import fetchFamousMovies from '../../components/api/apiFamous.js';

const actionTypes = {
  SET_MOVIES: 'SET_MOVIES'
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_MOVIES:
      return action.payload;
    default:
      return state;
  }
};

const HomePage = () => {
 
  const [movies, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const resListMovies = await fetchFamousMovies();
        dispatch({ type: actionTypes.SET_MOVIES, payload: resListMovies });
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
