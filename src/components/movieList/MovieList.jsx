import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {

  const location = useLocation();

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`${location.pathname}/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
