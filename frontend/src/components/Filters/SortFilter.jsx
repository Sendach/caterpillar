import React, {  useState } from 'react';
import { useLocation} from 'react-router-dom';
import FilterWrapper from './FilterWrapper';
import styles from './filter.module.scss';

const SortFilter = ({ filter, triggerFilter, setSortFilterEvent }) => {
  const location = useLocation();
  const moviePage = location.pathname.includes('movie');

  return (
    <div className={styles.filterPanel}>
      <FilterWrapper name='Sort' filter={filter} triggerFilter={triggerFilter}/>
      {filter &&
        <div className={styles.filterSection}>
          <h3 >Sort Results By</h3>
          <select className={styles.sortSelect} onChange={(e) => setSortFilterEvent(e)}>
            <option className={styles.opt} value="popularity.desc" >Popularity Descending</option>
            <option className={styles.opt} value="popularity.asc">Popularity Ascending</option>
            <option className={styles.opt} value={moviePage ? "release_date.desc" : "first_are_date.desc"}>Release Date Descending</option>
            <option className={styles.opt} value={moviePage ? "release_date.asc" : "first_are_date.asc"}>Release Date Ascending</option>
            <option className={styles.opt} value="original_title.asc">Title (A-Z)</option>
            <option className={styles.opt} value="original_title.desc">Title (Z-A)</option>
          </select>
          </div>
      }
    </div>
  );
}

export default SortFilter;