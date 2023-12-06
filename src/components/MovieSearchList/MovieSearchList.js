import { NavLink } from 'react-router-dom';
import MoviesSearchList from 'components/MoviesSearchList.styled';

const MovieSearchList = ({ movies, location }) => {
  return (
    <MoviesSearchList>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.original_title}
            </NavLink>
          </li>
        );
      })}
    </MoviesSearchList>
  );
};

export default MovieSearchList;
