import React from 'react';
import { NavLink } from 'react-router-dom';
import MovieList from './MoviesList.styled';

const MoviesList = ({ movies, location }) => {
  return (
    <>
      <MovieList>
        {movies.map(movie => (
          <li key={movie.id}>
            <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </NavLink>
          </li>
        ))}
      </MovieList>
    </>
  );
};

export default MoviesList;
