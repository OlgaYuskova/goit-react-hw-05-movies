import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../API';
import HomeContaiter from '../components/Home/HomeContaiter.styled';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
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
      <MoviesList movies={movies} />
    </HomeContaiter>
  );
};

export default Home;
