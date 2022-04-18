import React, { useState } from 'react';
import movieService from '../services/moviedb.js';

let x = 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'


const Home = () => {
  const [img, setImg] = useState('https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')

  const callApi = async () => {
    console.log('First attempt')
    const data = await movieService.getPopularMovies(2);
    console.log(data.results[0].poster_path)
    x = `https://image.tmdb.org/t/p/original${data.results[0].poster_path}`;
  }

  return (
    <>
    
    </>
  );
}

export default Home;