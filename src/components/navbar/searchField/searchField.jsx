import { FiSearch } from 'react-icons/fi';

import styles from './searchField.module.scss';

const SearchField = () => {
  const active = false;
  return (
    <div className={`${styles.s}  ${active ? styles.d : ''}`}>
      <div className={styles.searchIcon}>
        <FiSearch />
      </div>
      <input type="text" placeholder="Search"></input>
    </div>
  );
};

export default SearchField;
