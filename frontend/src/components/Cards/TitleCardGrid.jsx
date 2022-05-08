import React from 'react'
import styles from './titleCardGrid.module.scss';
import TitleCard from './TitleCard'
import { useLocation } from 'react-router-dom';
import imageNotFound from '../../assets/images/No-Image-Placeholder.png';

const TitleCardGrid = ({ movies }) => {
  const location = useLocation();
  const moviePage = location.pathname.includes('movie');

  return (
    <div className={styles.grid}>
      {movies.map(movie => (
        <TitleCard id={movie.id} title={moviePage ? movie.title : movie.name} date={moviePage ? movie.release_date : movie.first_air_date} img={ movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : `https://upload.wikimedia.org/wikipedia/commons/0/06/Question-mark.jpg` } />
      ))}
    </div>
  )
}

export default TitleCardGrid