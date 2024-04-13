// src/components/App.jsx
import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import 'clsx';
import './App.module.css';
import HomePage from '../pages/homePage/HomePage';
import MoviesPage from '../pages/moviesPage/MoviesPage';
import MovieDetailsPage from '../pages/movieDetailsPage/MovieDetailsPage';
import NotFoundPage from '../pages/notFoundPage/NotFoundPage';
import Navigation from './navigation/Navigation';


function App() {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/movies">Movies</Link></li>
          </ul>
        </nav>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
          <Route path="*" element = {<NotFoundPage />} />
        </Routes>
      </div>
      </>
  );
}

export default App;