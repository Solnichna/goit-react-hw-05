// src/components/App.jsx

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