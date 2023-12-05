import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';
const API_KEY = 'cb47733d8738b823995f01432c3cdbcf';
axios.defaults.params = {
  api_key: API_KEY,
};

export const fetchMovies = async () => {
  try {
    const response = await axios.get(`/3/trending/movie/week`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const fetchMovieDetails = async movieId => {
  try {
    const response = await axios.get(`/3/movie/${movieId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchMovieCast = async movieId => {
  try {
    const response = await axios.get(`/3/movie/${movieId}/credits`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchMovieReviews = async movieId => {
  try {
    const response = await axios.get(`3/movie/${movieId}/reviews`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const searchMovie = async query => {
  try {
    const response = await axios.get(`/3/search/movie?query=${query}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
