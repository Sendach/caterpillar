import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import movieService from '../services/moviedb.js';
import styles from './movie.module.scss';
import MovieHeader from '../components/Movie/Header/MovieHeader.jsx';

const TVShow = () => {
  let { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    const getShow = async () => {
      const tv = await movieService.getTV(id);

      const creatorArr = []
      tv.created_by.map(creator => {
        creatorArr.push(creator.name);
      })

      setShow({ 
        ...tv,
        backdropImg: `https://image.tmdb.org/t/p/original${tv.backdrop_path}`,
        posterImg: `https://image.tmdb.org/t/p/original${tv.poster_path}`,
        creators: creatorArr
      })
    }

    getShow();
  }, [])

  return (
    <>
      { show && <MovieHeader movie={show}/> }
    </>
  );
}

export default TVShow;