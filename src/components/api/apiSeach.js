import axios from "axios";

const SearchMovies = async (searchInput) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${searchInput}&include_adult=false&language=en-US&page=1`;

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

export default SearchMovies;