import { NavLink } from 'react-router-dom';

const MovieSearchList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.original_title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieSearchList;
