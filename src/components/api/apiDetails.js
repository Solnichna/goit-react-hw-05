import axios from "axios";

const DetailsMovies = async (movie_id) => {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`;

  const options = {
    headers: {
      accept: "application/json",
      Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGYwZGQ2NzViZjk4MGZhZDZmMmNhNzVhYTMxNWEwMCIsInN1YiI6IjY2MWEzOWRlOTNkYjkyMDE3ZDBiNmZjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2OI_1Xgzb6a_sS3hPXVbf5yTQk5Lp-hHjy7Mw067kFU",
    },
  };

  const response = await axios.get(url, options);

  return response.data;
};

export default DetailsMovies;