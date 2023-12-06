import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'API';
import { ReviewsList, ReviewsItem } from './Rewiews.styled';

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
      <ReviewsList>
        {movieReviews.map(review => (
          <ReviewsItem key={review.id}>
            <h3>Author: {review.author}</h3>
            <p>{review.content}</p>
          </ReviewsItem>
        ))}
      </ReviewsList>
    </div>
  );
};

export default Reviews;
