import { FiSearch, FiX } from 'react-icons/fi';
import { useState } from 'react';
import styles from './searchField.module.scss';
import { useStore } from '../../../store/uiStore';

const SearchField = () => {
  const { tasks } = useStore((state) => ({
    tasks: state.tasks,
  }));

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = tasks.filter((value) => {
      return value.task.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord == '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const closeSearchResult = () => {
    setWordEntered('');
    setFilteredData([]);
  };
  return (
    <div className={styles.nav}>
      <div className={styles.searchIcon}>
        <FiSearch />
      </div>

      <input
        className={`${styles.searchBar}
          ${wordEntered.length != 0 && styles.stretch}`}
        type="text"
        placeholder="Search"
        value={wordEntered}
        onChange={handleFilter}
      ></input>
      {wordEntered.length != 0 && (
        <div key="searchResult" className={styles.searchResult}>
          <div className={styles.searchList}>
            {filteredData.length != 0
              ? filteredData.map((data) => {
                  return (
                    <div className={styles.searchItem} key={data.id}>
                      <div className={styles.task}>{data.task}</div>
                      <div className={styles.description}>
                        {data.description}
                      </div>
                    </div>
                  );
                })
              : 'No task Found'}
          </div>
        </div>
      )}
      <div
        className={`${styles.closeIcon} ${
          wordEntered.length != 0 && styles.showCloseIcon
        }`}
      >
        <FiX onClick={closeSearchResult} />
      </div>
    </div>
  );
};

export default SearchField;
