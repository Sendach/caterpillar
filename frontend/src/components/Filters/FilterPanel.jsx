import React, { useState } from 'react';
import styles from './filter.module.scss';
import Filter from './Filter';
import SortFilter from './SortFilter';
import DetailedFilter from './DetailedFilter';

const FilterPanel = ({ handleSortFilterSelection }) => {
  const [sortFilter, setSortFilter] = useState(false);
  const [sortFilterEvent, setSortFilterEvent] = useState(null);
  const [detailedFilter, setDetailedFilter] = useState(false);

  const triggerSortFilter = () => {
    setSortFilter(!sortFilter);
  }

  const triggerDetailedFilter = () => {
    setDetailedFilter(!detailedFilter);
  }

  const search = () => {
    handleSortFilterSelection(sortFilterEvent);
  }

  return (
    <div className={styles.panel}>
      <SortFilter filter={sortFilter} triggerFilter={triggerSortFilter} setSortFilterEvent={setSortFilterEvent}/>
      <DetailedFilter filter={detailedFilter} triggerFilter={triggerDetailedFilter}/>
      <button className={styles.search} onClick={search}>Search</button>
    </div>
  );
}

export default FilterPanel;