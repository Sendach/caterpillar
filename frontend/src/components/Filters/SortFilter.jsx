import React from 'react';
import styles from './filter.module.scss';

const SortFilter = ({ handleSortFilterSelection }) => {
  return (
    <div className={styles.filterSection}>
      <h3>Sort Results By</h3>
      <select className={styles.sortSelect} onChange={(e) => handleSortFilterSelection(e.target.value)}>
        <option value="popularity.desc" >Popularity Descending</option>
        <option value="popularity.asc">Popularity Ascending</option>
        <option value="release_date.desc">Release Date Descending</option>
        <option value="release_date.asc">Release Date Ascending</option>
        <option value="original_title.asc">Title (A-Z)</option>
        <option value="original_title.desc">Title (Z-A)</option>
      </select>
    </div>
  );
}

export default SortFilter;