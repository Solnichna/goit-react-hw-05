import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchCastMovies } from "../api/apiCast";

const MovieCast = () => {
  const { movieId } = useParams();
  const [castInf, setCastInf] = useState([]);

  useEffect(() => {
    const showCastInf = async () => {
      const result = await fetchCastMovies (movieId);
      setCastInf(result);
    };
    showCastInf();
  }, [movieId]);

  return (
    <>
      {castInf.map((actor) => (
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