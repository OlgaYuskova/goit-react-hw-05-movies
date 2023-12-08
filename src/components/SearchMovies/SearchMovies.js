import { useState } from 'react';
import FormSearch from './FormSearch.styled';

const SearchMovies = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };
  const reset = () => {
    setQuery('');
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    reset();
  };

  return (
    <div>
      <FormSearch onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          aria-label="select"
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={query}
        />
        <button type="submit">Search</button>
      </FormSearch>
    </div>
  );
};
export default SearchMovies;
