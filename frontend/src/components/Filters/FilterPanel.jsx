import React from 'react';
import styles from './filter.module.scss';
import Filter from './Filter';

const FilterPanel = ({ handleSortFilterSelection }) => {
  return (
    <div className={styles.panel}>
      <Filter name="Sort" handleSortFilterSelection={handleSortFilterSelection} />
      <Filter name="Filter" />
    </div>
  );
}

export default FilterPanel;