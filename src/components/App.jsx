// src/components/App.jsx
import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import clsx from 'clsx';
import css from './App.module.css';
import HomePage from '../pages/homePage/HomePage';
import MoviesPage from '../pages/moviesPage/MoviesPage';
import MovieDetailsPage from '../pages/movieDetailsPage/MovieDetailsPage';
import NotFoundPage from '../pages/notFoundPage/NotFoundPage';



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
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/movies" component={MoviesPage} exact />
          <Route path="/movies/:movieId" component={MovieDetailsPage} exact />
          <Route path="*" element = {<NotFoundPage />} />
        </Switch>
      </div>
      </>
  );
}

export default App;