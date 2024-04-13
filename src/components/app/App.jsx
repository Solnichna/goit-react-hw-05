// src/components/App.jsx
import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import clsx from 'clsx';
import css from './App.module.css';
import HomePage from './components/HomePage';
import MoviesPage from './components/MoviesPage';
import MovieDetailsPage from './components/MovieDetailsPage';
import MovieCast from './components/MovieCast';
import MovieReviews from './components/MovieReviews';
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
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
          <Route path="/movies/:movieId/cast" component={MovieCast} exact />
          <Route path="/movies/:movieId/reviews" component={MovieReviews} exact />
          <Route path="*" element = {<NotFoundPage />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;