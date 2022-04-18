import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import movieService from '../services/moviedb.js';
import styles from './movie.module.scss';
import MovieHeader from '../components/Movie/Header/MovieHeader.jsx';

const Movie = () => {
  let { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      const movie = await movieService.getMovieById(id);

      const directors = [], writers = [];
      movie.credits.crew.map(crew => {
        if (crew.job === 'Director') directors.push(crew.name);
        else if (crew.job === 'Writer') writers.push(crew.name);
      })

      let starsSortedByPopularity = [], starNames = [];
      starsSortedByPopularity = movie.credits.cast.sort((a,b) => b.popularity - a.popularity).slice(0, 3);
      starsSortedByPopularity.map(star => {
        starNames.push(star.name);
      })

      setMovie({ 
        ...movie,
        backdropImg: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
        posterImg: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
        castCrew: {
          directors: directors,
          writers: writers,
          stars: starNames
        }
      })
    }

    getMovie();
  }, [])
  
  return (
    <>
      { movie && <MovieHeader movie={movie}/> }
    </>
  );
}

export default Movie;