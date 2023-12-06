import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../API';

const MovieDetails = () => {
  const location = useLocation();
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
    return <div>Loading movie details...</div>;
  }

  const score = movieDetails.vote_average * 10;

  return (
    <>
      <NavLink to={location.state.from}>Back to Movie</NavLink>
      <div>
        <h1>{movieDetails.title}</h1>
        <h3>User score:{score.toFixed(2)}%</h3>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
          alt={movieDetails.title}
        />
        <p>{movieDetails.overview}</p>
        <p>Genres: </p>
        <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
        <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;
