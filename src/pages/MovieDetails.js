import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../API';
import {
  MovieDetailsContainer,
  MovieDetailsInfo,
  MovieCastAndReviews,
} from '../components/MovieDetails.js/MovieDetailsContainer.styled.js';
import Button from 'components/MovieDetails.js/Button';

const MovieDetails = () => {
  const location = useLocation();
  const prevLocation = useRef(location.state?.from ?? '/movies');

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
      <Button location={prevLocation.current} />
      <MovieDetailsContainer>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
          alt={movieDetails.title}
        />
        <MovieDetailsInfo>
          <h1>{movieDetails.title}</h1>
          <h3>User score:{score.toFixed(2)}%</h3>
          <p>{movieDetails.overview}</p>
        </MovieDetailsInfo>
      </MovieDetailsContainer>
      <MovieCastAndReviews>
        <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
        <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
      </MovieCastAndReviews>
      <Outlet />
    </>
  );
};

export default MovieDetails;
