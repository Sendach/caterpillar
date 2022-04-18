import axios from 'axios';
const baseUrl = '/api/moviedb';

const getMovie = async (id) => {
  const response = await axios.get(`${baseUrl}/movie/${id}`, id);
  console.log('Calling for a movie')
  return response.data;
}

const getPopularMovies = async (page) => {
  const response = await axios.get(`${baseUrl}/movie/popular`, 1);
  return response.data;
}

const getMoviesSortedBy = async (sortBy, page) => {
  const response = await axios.get(`${baseUrl}/discover/movie?sort_by=${sortBy}&page=${page}`);
  return response.data;
}

const getTVSortedBy = async (sortBy, page) => {
  const response = await axios.get(`${baseUrl}/discover/tv?sort_by=${sortBy}&page=${page}`);
  return response.data;
}

const getMovieById = async (id) => {
  const response = await axios.get(`${baseUrl}/movie/${id}`, id);
  return response.data;
}

const getMovieCrerdis = async (id) => {
  const response = await axios.get(`${baseUrl}/movie/${id}/credits`, id);
  return response.data;
}

const getTV = async (id) => {
  const response = await axios.get(`${baseUrl}/tv/${id}`, id);
  return response.data;
}

export default { getMovie, getPopularMovies, getMoviesSortedBy, getTVSortedBy, getMovieById, getMovieCrerdis, getTV }