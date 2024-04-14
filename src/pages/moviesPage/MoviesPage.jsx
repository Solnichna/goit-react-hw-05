
import { useReducer } from 'react';

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

  const handleInputChange = (event) => {
    dispatch({ type: actionTypes.SET_SEARCH_TERM, payload: event.target.value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  
    console.log('Search term:', searchTerm);
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
        <button className='btn-form'type="button" onClick={handleClearSearch}>Clear</button>
      </form>
    </div>
  );
};

export default MoviesPage;
