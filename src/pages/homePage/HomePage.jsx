
//*import MovieList from '../../components/movieList/MovieList';

import { NavLink } from "react-router-dom";

const HomePage = ({ MovieList }) => {
  
  return (
    <ul className="home">
      <h1>Trending today</h1>
      {MovieList.map((MovieList) => (
        <li key={MovieList.id}>
          <NavLink to={`/movie/${MovieList.id}`}>
            {MovieList.original_title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default HomePage;