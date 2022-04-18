import React, { useState, useEffect } from 'react'
import TitleCardGrid from '../components/Cards/TitleCardGrid';
import FilterPanel from '../components/Filters/FilterPanel';
import movieService from '../services/moviedb.js';
import styles from './movies.module.scss';

const TVShows = () => {
  const [selectedFilter, setSelectedFilter] = useState('popularity.desc');
  const [tv, setTv] = useState([]);

  const handleSortFilterSelection = async (filter) => {
    setSelectedFilter(filter);
    const results = await movieService.getTVSortedBy(filter, 1);
    setTv(results.results)
  }

  useEffect(() => {
    const initTVList = async () => {
      const results = await movieService.getTVSortedBy(selectedFilter, 1);
      setTv(results.results)
    }
    initTVList();
  }, [])

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.pageTitle}>
          <h1>Popular TV Shows</h1>
        </div>
        <div className={styles.content}>
          <>
            <FilterPanel handleSortFilterSelection={handleSortFilterSelection} />
          </>
          <>
            <TitleCardGrid movies={tv} />
          </>
        </div>
      </div>
    </div>
  )
}

export default TVShows