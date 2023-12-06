import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { fetchMovies } from '../API';

const Home = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchMovies();
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Popular Movies</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
