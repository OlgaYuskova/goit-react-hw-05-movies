import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/discover/movie';
const API_KEY = 'cb47733d8738b823995f01432c3cdbcf';

export const fetchMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}?api_key=${API_KEY}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const fetchMovieDetails = async movieId => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
