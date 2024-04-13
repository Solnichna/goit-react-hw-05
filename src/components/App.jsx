// src/components/App.jsx
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { fetchFamousMovies } from "./api/apiFamous.js";
import { SearchMovies } from "./api/apiSearch.js";

import './App.module.css';

import HomePage from '../pages/homePage/HomePage.jsx';
import MoviesPage from '../pages/moviesPage/MoviesPage.jsx';
import MovieDetailsPage from '../pages/movieDetailsPage/MovieDetailsPage.jsx';
import NotFoundPage from '../pages/notFoundPage/NotFoundPage.jsx';
import Navigation from './navigation/Navigation.jsx';
import MovieCast from './movieCast/MovieCast.jsx';
import MovieReviews from './movieReviews/MovieReviews.jsx';


function App() {
  const [treandMovies, setTrendMovies] = useState([]);
  const [searchInput, setSearchInput] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const resListMovies = await fetchFamousMovies();
        setTrendMovies(resListMovies);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };
    fetchMovies();
  }, []);

  useEffect(() => {
    const loadSearch = async () => {
      const resData = await SearchMovies(searchInput);
      setSearchInput(resData);
    };
    loadSearch();
  }, [searchInput]);

  return (
    <>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} /> 
          </Route>
          <Route path="*" element = {<NotFoundPage />} />
        </Routes>
    </>
  );
}

export default App;