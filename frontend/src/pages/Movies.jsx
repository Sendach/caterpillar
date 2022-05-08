import React, { useState, useEffect } from 'react'
import TitleCardGrid from '../components/Cards/TitleCardGrid';
import FilterPanel from '../components/Filters/FilterPanel';
import movieService from '../services/moviedb.js';
import styles from './movies.module.scss';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const handleSortFilterSelection = async (e) => {
    e.preventDefault();
    const results = await movieService.getMoviesSortedBy(e.target.value, 1);
    setMovies(results.results)
    console.log(results.results)
  }

  useEffect(() => {
    const initMovieList = async () => {
      const results = await movieService.getMoviesSortedBy('popularity.desc', 1);
      setMovies(results.results)
      console.log(results.results)
    }
    initMovieList();
  }, [])

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.pageTitle}>
          <h1>Popular Movies</h1>
        </div>
        <div className={styles.content}>
          <>
            <FilterPanel handleSortFilterSelection={handleSortFilterSelection} />
          </>
          <>
            <TitleCardGrid movies={movies} />
          </>
        </div>
      </div>
    </div>
  )
}

export default Movies