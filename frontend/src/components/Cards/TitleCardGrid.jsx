import React from 'react'
import styles from './titleCardGrid.module.scss';
import TitleCard from './TitleCard'
import imageNotFound from '../../assets/images/No-Image-Placeholder.png';

const TitleCardGrid = ({ movies }) => {
  return (
    <div className={styles.grid}>
      {movies.map(movie => (
        <TitleCard id={movie.id} title={movie.title} img={ movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : `https://image.tmdb.org/t/p/original/bUfLZKgGUXQMZLI7d9tUlT1Vdt9.jpg` } />
      ))}
    </div>
  )
}

export default TitleCardGrid