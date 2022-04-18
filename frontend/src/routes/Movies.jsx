import React, { useState, useEffect } from 'react'
import TitleCardGrid from '../components/Cards/TitleCardGrid';
import FilterPanel from '../components/Filters/FilterPanel';
import movieService from '../services/moviedb.js';
import styles from './movies.module.scss';

const Movies = () => {
  const [selectedFilter, setSelectedFilter] = useState('popularity.desc');
  const [movies, setMovies] = useState([]);

  const handleSortFilterSelection = async (filter) => {
    setSelectedFilter(filter);
    const results = await movieService.getMoviesSortedBy(filter, 1);
    setMovies(results.results)
  }

  useEffect(() => {
    const initMovieList = async () => {
      const results = await movieService.getMoviesSortedBy(selectedFilter, 1);
      setMovies(results.results)
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