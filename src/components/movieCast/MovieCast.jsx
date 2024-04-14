import { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import fetchCastMovies from '../api/apiCast.js';

const actionTypes = {
  SET_CAST_INFO: 'SET_CAST_INFO'
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_CAST_INFO:
      return {
        ...state,
        castInf: action.payload
      };
    default:
      return state;
  }
};

const MovieCast = () => {
  const { movieId } = useParams();

  const [state, dispatch] = useReducer(reducer, { castInf: [] });

  useEffect(() => {
    const showCastInf = async () => {
      const result = await fetchCastMovies(movieId);
     
      dispatch({ type: actionTypes.SET_CAST_INFO, payload: result });
    };
    showCastInf();
  }, [movieId]);

  return (
    <>
      {state.castInf.map((actor) => (
        <div key={actor.id}>
          <img
            src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
            alt={actor.name}
          />
          <p>Actor: {actor.name}</p>
          <p>Character: {actor.character}</p>
        </div>
      ))}
    </>
  );
};

export default MovieCast;
