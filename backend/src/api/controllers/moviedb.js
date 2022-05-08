import express from 'express';
const movieRouter = express.Router();
import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org';

movieRouter.get(`/movie/:id`, async (req, res, next) => {
  const param = req.params;
  try { 
    const { data } = await axios.get(`${baseUrl}/3/movie/${param.id}?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US&append_to_response=credits`);
    if (data) res.json(data);
    else throw {name: 'NotFound', message: `Cannot find movie with id: ${param.id}`};
  } catch (error) {
    next(error); 
  }
})

movieRouter.get(`/tv/:id`, async (req, res, next) => {
  const param = req.params;
  try { 
    const { data } = await axios.get(`${baseUrl}/3/tv/${param.id}?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US&append_to_response=credits`);
    if (data) res.json(data);
    else throw {name: 'NotFound', message: `Cannot find movie with id: ${param.id}`};
  } catch (error) {
    next(error); 
  }
})

movieRouter.get('/movie/popular', async (req, res, next) => {
  const param = req.params;

  try { 
    const { data } = await axios.get(`${baseUrl}/3/movie/popular?page=${param.page}&api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}`);
    if (data) res.json(data);
    else throw {name: 'NotFound', message: `Cannot find email ${param.id}`};
  } catch (error) {
    next(error); 
  }
})

movieRouter.get('/discover/movie', async (req, res, next) => {
  try { 
    const { data } = await axios.get(`${baseUrl}/3/discover/movie?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US&sort_by=${req.query.sort_by}&include_adult=false&include_video=false&page=${req.query.page}&with_watch_monetization_types=flatrate&release_date.lte=2022-12-28`);
    if (data) res.json(data);
    else throw {name: 'NotFound', message: `Cannot find email ${param.id}`};
  } catch (error) {
    next(error); 
  }
})

movieRouter.get('/discover/tv', async (req, res, next) => {
  try { 
    const { data } = await axios.get(`${baseUrl}/3/discover/tv?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US&sort_by=${req.query.sort_by}&include_adult=false&include_video=false&page=${req.query.page}&with_watch_monetization_types=flatrate&release_date.lte=2022-04-20`);
    if (data) res.json(data);
    else throw {name: 'NotFound', message: `Cannot find email ${param.id}`};
  } catch (error) {
    next(error); 
  }
})

movieRouter.get(`/movie/:id/credits`, async (req, res, next) => {
  const param = req.params;
  try { 
    const { data } = await axios.get(`${baseUrl}/3/movie/${param.id}/credits?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US`);
    if (data) res.json(data);
    else throw {name: 'NotFound', message: `Cannot find movie with id: ${param.id}`};
  } catch (error) {
    next(error); 
  }
})

export default movieRouter;