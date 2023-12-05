import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'API';

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
      <ul>
        {movieCast.map(cast => (
            <li key={cast.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                alt={cast.name}
              />
              <h1>{cast.name}</h1>
              <h3>Character: {cast.character}</h3>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cast;
