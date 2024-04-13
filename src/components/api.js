import axios from "axios";

const url =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

const options = {
  headers: {
    // Замість api_read_access_token вставте свій токен
    Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGYwZGQ2NzViZjk4MGZhZDZmMmNhNzVhYTMxNWEwMCIsInN1YiI6IjY2MWEzOWRlOTNkYjkyMDE3ZDBiNmZjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2OI_1Xgzb6a_sS3hPXVbf5yTQk5Lp-hHjy7Mw067kFU",
  },
};

axios
  .get(url, options)
  .then((response) => console.log(response))
  .catch((err) => console.error(err));




