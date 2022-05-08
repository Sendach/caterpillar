import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import movieService from '../../../services/moviedb.js';
import { minToMovieDuration } from '../../../utils/helpers/convertions.helpers';
//import styles from '../../routes/movie.module.scss';
import styles from './movieHeader.module.scss';
import MovieHeaderCredits from './MovieHeaderCredits.jsx';

const MovieHeader = ({ movie }) => {
  return (
    <div className={styles.header} style={{ backgroundImage: `url(${movie.backdropImg})` }}>
      <div className={styles.background}>
        <div className={styles.container}> 
          <img src={movie.posterImg} className={styles.poster}/>
          <div className={styles.content}>
            <div className={styles.title}>
              <div className={styles.name}>
                <h2>{movie.title ? movie.title : movie.original_name}</h2>
              </div>
              <div className={styles.titleFacts}>
                <span>{movie.release_date ? movie.release_date.substring(0, 4) : movie.first_air_date.substring(0, 4)}</span>
                <span className={styles.bullet}>{'\u2022'}</span>
                <span>
                  {movie.genres.map((genre, i) => (
                    i === movie.genres.length - 1 
                      ?  genre.name
                      : `${genre.name}, `
                  ))}
                </span>
                <span className={styles.bullet}>{'\u2022'}</span>
                <span>
                  {movie.hasOwnProperty('runtime') ? minToMovieDuration(movie.runtime) : minToMovieDuration(movie.episode_run_time[0])}
                </span>
              </div>
            </div>
            <div className={styles.headerInfo}> 
              <span className={styles.tagline}>{movie.tagline}</span>
              <div className={styles.overview}>
                <h3>Overview</h3>
                <span>{movie.overview}</span>
                </div>
              </div>
              {movie.release_date ? <MovieHeaderCredits credits={movie.castCrew}/> : <MovieHeaderCredits credits={movie.creators}/>}
            </div>
          </div>
      </div>
    </div>
  );
}
export default MovieHeader;