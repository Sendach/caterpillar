import React, { useState } from 'react';
import styles from './filter.module.scss';
import FilterWrapper from './FilterWrapper';

const DetailedFilter = ({ filter, triggerFilter }) => {
  return (
    <div className={styles.filterPanel}>
      <FilterWrapper name='Filter' filter={filter} triggerFilter={triggerFilter} />
      { filter && 
        <>
          <div className={styles.filterSection}>Release Date</div>
          <div className={styles.filterSection}>Genres</div> 
          <div className={styles.filterSection}>Language</div> 
        </>
      }
    </div>

  );
}

export default DetailedFilter;