import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import SearchMovies from 'components/SearchMovies/SearchMovies';
import MovieSearchList from 'components/MovieSearchList/MovieSearchList';
import { searchMovie } from '../API';

const Movie = () => {
  const location = useLocation();
  const [movies, setMovies] = useState(null);
  //eslint-disable-next-line
  const [error, setError] = useState('');
  const [params, setParams] = useSearchParams();
  const value = params.get('query');

  useEffect(() => {
    const getMovie = async () => {
      if (!value) {
        return;
      }

      try {
        const movie = await searchMovie(value);
        setMovies(movie.results);
      } catch (error) {
        setError(error);
      }
    };

    getMovie();
  }, [value]);

  const handleFormSubmit = query => {
    if (query === '') {
      return setParams({});
    }

    setParams({ query });
  };

  return (
    <section>
      <div>
        <SearchMovies onSubmit={handleFormSubmit} />
        {movies && <MovieSearchList movies={movies} location={location} />}
      </div>
    </section>
  );
};
export default Movie;
