import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from './navigation/Navigation.jsx';

const HomePage = React.lazy(() => import('../pages/homePage/HomePage.jsx'));
const MoviesPage = React.lazy(() => import('../pages/moviesPage/MoviesPage.jsx'));
const MovieDetailsPage = React.lazy(() => import('../pages/movieDetailsPage/MovieDetailsPage.jsx'));
const NotFoundPage = React.lazy(() => import('../pages/notFoundPage/NotFoundPage.jsx'));
const MovieCast = React.lazy(() => import('../components/movieCast/MovieCast.jsx'));
const MovieReviews = React.lazy(() => import('../components/movieReviews/MovieReviews.jsx'));

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
