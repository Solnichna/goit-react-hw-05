import { useEffect, useReducer } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from '../../components/movieList/MovieList.jsx';

const actionTypes = {
  SET_SEARCH_TERM: 'SET_SEARCH_TERM',
  CLEAR_SEARCH_TERM: 'CLEAR_SEARCH_TERM'
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return action.payload;
    case actionTypes.CLEAR_SEARCH_TERM:
      return '';
    default:
      return state;
  }
};

const MoviesPage = () => {
  const [searchTerm, dispatch] = useReducer(reducer, '');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({ search: searchTerm });
  }, [searchTerm, setSearchParams]);

  const handleInputChange = (event) => {
    dispatch({ type: actionTypes.SET_SEARCH_TERM, payload: event.target.value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const handleClearSearch = () => {
    dispatch({ type: actionTypes.CLEAR_SEARCH_TERM });
  };

  return (
    <div>
      <form className='form' onSubmit={handleFormSubmit}>
        <input 
          type="text" 
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button className='btn-form' type="submit">Search</button>
        <button className='btn-form' type="button" onClick={handleClearSearch}>Clear</button>
      </form>
      <MovieList searchTerm={searchTerm} />
    </div>
  );
};

export default MoviesPage;
