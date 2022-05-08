import { IoMdArrowDropright, IoMdArrowDropdown } from 'react-icons/io';
import styles from './filter.module.scss';

const FilterWrapper = ({ name, filter, triggerFilter }) => {
  return (
    <button className={styles.header} onClick={() => triggerFilter()} 
    style={{ borderRadius: filter ? '8px 8px 0px 0px' : '8px' }}>
      <h2>{name}</h2>
      { filter 
         ? <IoMdArrowDropdown size="1.5rem" />
         : <IoMdArrowDropright size="1.5rem" /> }
    </button>
  );
}

export default FilterWrapper;