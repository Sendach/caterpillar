import React, { useState } from 'react';
import SortFilter from './SortFilter';
import DetailedFilter from './DetailedFilter';

import styles from './filter.module.scss';
import { IoMdArrowDropright, IoMdArrowDropdown } from 'react-icons/io';

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
      <button className={styles.header} onClick={() => triggerFilter()} 
      style={{ borderRadius: filter ? '8px 8px 0px 0px' : '8px' }}>
        <h2>{name}</h2>
        { filter 
           ? <IoMdArrowDropdown size="1.5rem" />
           : <IoMdArrowDropright size="1.5rem" /> }
      </button>
      { filter && <ActiveFilter /> }
    </div>
  );
}

export default Filter;