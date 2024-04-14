import { useEffect, useState } from "react";
import { Outlet, useParams, NavLink } from "react-router-dom";

import DetailsMovies from '../../components/api/apiDetails';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const loadDetails = async () => {
      const result = await DetailsMovies (movieId);
      setMovieDetails(result);
      console.log(result);
    };
    loadDetails();
  }, [movieId]);

  return (
    <div>
      <button type="button">Back</button>
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetails?.backdrop_path}`}
      />
      <h3>{movieDetails?.title}</h3>
      <p>Release date: {movieDetails?.release_date}</p>
      
      <h4>Genres</h4>
      {movieDetails?.genres.map((genre) => genre.name).join(", ")}
      <h4>Overview</h4>
      <p>{movieDetails?.overview}</p>
      <h4>Additional information:</h4>
      <NavLink to={`cast`}>Cast</NavLink>
      <NavLink to={`reviews`}>Reviews</NavLink>

      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;