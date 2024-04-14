import { useEffect, useReducer } from "react";
import { useHistory, useParams, NavLink } from "react-router-dom";
import DetailsMovies from '../../components/api/apiDetails';


const actionTypes = {
  SET_MOVIE_DETAILS: 'SET_MOVIE_DETAILS'
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_MOVIE_DETAILS:
      return {
        ...state,
        movieDetails: action.payload
      };
    default:
      return state;
  }
};

const MovieDetailsPage = () => {
  const history = useHistory();
  const { movieId } = useParams();

  const [state, dispatch] = useReducer(reducer, { movieDetails: null });

  useEffect(() => {
    const loadDetails = async () => {
      const result = await DetailsMovies(movieId);
      
      dispatch({ type: actionTypes.SET_MOVIE_DETAILS, payload: result });
    };
    loadDetails();
  }, [movieId]);

  const handleBack = () => {
    history.goBack();
  };

  return (
    <div>
      <button type="button" onClick={handleBack}>Back</button>
      <img src={`https://image.tmdb.org/t/p/w500${state.movieDetails?.backdrop_path}`} alt={state.movieDetails?.title} />
      <h3>{state.movieDetails?.title}</h3>
      <p>Release date: {state.movieDetails?.release_date}</p>
      
      <h4>Genres</h4>
      {state.movieDetails?.genres.map((genre) => genre.name).join(", ")}
      <h4>Overview</h4>
      <p>{state.movieDetails?.overview}</p>
      <h4>Additional information:</h4>
      <NavLink to={`cast`}>Cast</NavLink>
      <NavLink to={`reviews`}>Reviews</NavLink>
    </div>
  );
};

export default MovieDetailsPage;
