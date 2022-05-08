import React, { useState } from 'react';
import FilterWrapper from './FilterWrapper';
import SortFilter from './SortFilter';
import DetailedFilter from './DetailedFilter';

const Filter = ({ name, handleSortFilterSelection }) => {
  const [filter, setFilter] = useState(false);
  
  const triggerFilter = () => {
    setFilter(!filter);
  }

  const ActiveFilter = () => name === 'Sort'
    ? <SortFilter handleSortFilterSelection={handleSortFilterSelection}/>
    : <DetailedFilter />

  return (
    <div>
      <FilterWrapper name={name} filter={filter} triggerFilter={triggerFilter}/>
      { filter && <ActiveFilter /> }
    </div>
  );
}

export default Filter;