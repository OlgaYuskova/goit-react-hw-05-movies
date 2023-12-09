import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchMovies } from '../API';
import HomeContaiter from '../components/Home/HomeContaiter.styled';
import MoviesList from 'components/MoviesList/MoviesList';

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
    <HomeContaiter>
      <h2>Popular Movies</h2>
      <MoviesList movies={movies} location={location} />
    </HomeContaiter>
  );
};

export default Home;
