import React from 'react';
import { searchMovie } from 'API';

const SearchMovies = () => {
  return (
    <div>
      <form>
        <button type="submit">
          <span>Search</span>
        </button>
        <input
          type="text"
          autoComplete="off"
          name="text"
          placeholder="Search images and photos"
        />
      </form>
    </div>
  );
};

export default SearchMovies;
