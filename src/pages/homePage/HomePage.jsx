
import MovieList from '../../components/movieList/MovieList';

const Home = () => {

  return (
    <div className="home-page">
      <h2>Trending Movies</h2>
      <MovieList movies={trendingMovies} />
    </div>
  );
};

export default Home;
