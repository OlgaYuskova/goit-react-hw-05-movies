import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../API';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchMovieDetails(movieId);
        setMovieDetails(response);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchData();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Error loading movie details...</div>;
  }

  const score = movieDetails.vote_average * 10;

  return (
    <div>
      <h1>{movieDetails.title}</h1>
      <h3>User score:{score.toFixed(2)}%</h3>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
        alt={movieDetails.title}
      />
      <p>{movieDetails.overview}</p>
      <p>Genres: </p>
    </div>
  );
};

export default MovieDetails;
