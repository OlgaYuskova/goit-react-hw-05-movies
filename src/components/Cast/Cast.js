import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'API';
import { CastList, CastItem } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    const fetchDataCast = async () => {
      try {
        const response = await fetchMovieCast(movieId);
        setMovieCast(response.cast);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchDataCast();
  }, [movieId]);

  return (
    <div>
      <CastList>
        {movieCast.map(cast => (
          <CastItem key={cast.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
              alt={cast.name}
            />
            <h1>{cast.name}</h1>
            <h3>Character: {cast.character}</h3>
          </CastItem>
        ))}
      </CastList>
    </div>
  );
};

export default Cast;
