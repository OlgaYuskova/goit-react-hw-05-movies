import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'API';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    const fetchDataReviews = async () => {
      try {
        const response = await fetchMovieReviews(movieId);
        setMovieReviews(response.results);
      } catch (error) {
        console.error('Error fetching movie reviews:', error);
      }
    };

    fetchDataReviews();
  }, [movieId]);

  return (
    <div>
      <ul>
        {movieReviews.map(review => (
          <li key={review.id}>
            <h1>Author: {review.author}</h1>
            <h3>{review.content}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
