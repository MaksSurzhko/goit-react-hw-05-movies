import axios from "axios";



const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = "c07b467f398e2f0da352d2f188af7ee5";



export const getMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/all/day?api_key=${API_KEY}`
  );
  return response.data;
};

export const getMovie = async movieName => {
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${movieName}&include_adult=false&language=en-US&page=1`
  );
  return response.data;
};

  export const getDetailMovie = async movie_id => {
    const response = await axios.get(
      `${BASE_URL}movie/${movie_id}?language=en-US&api_key=${API_KEY}`
    );
    return response.data;
  };
  
  export const getCast = async movie_id => {
    const response = await axios.get(
      `${BASE_URL}movie/${movie_id}/credits?language=en-US&api_key=${API_KEY}`
    );
    return response.data;
  };
  
  export const getReviews = async movie_id => {
    const response = await axios.get(
      `${BASE_URL}movie/${movie_id}/reviews?language=en-US&api_key=${API_KEY}`,
    );
    return response.data;
  };