import { FiMenu, FiHome, FiPlus } from 'react-icons/fi';
import SearchField from './searchField/searchField';
import { useStore } from '../../store/uiStore';
import styles from './navbar.module.scss';
import AddTask from '../addtask/addTask';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const toggleFun = useStore((state) => state.togSidebar);
  const setIsHome = useStore((state) => state.setIsHome);

  const [showAddTask, setshowAddTask] = useState(false);

  return (
    <div className={styles.header}>
      <nav>
        <ul>
          <li>
            <FiMenu className={styles.navicons} onClick={() => toggleFun()} />
          </li>
          <li>
            <Link to="/inbox" onClick={() => setIsHome(true)}>
              <FiHome className={styles.navicons} />
            </Link>
          </li>
          <li className={styles.seachField}>
            <SearchField />
          </li>
          <li className={styles.rightContent}>
            <FiPlus
              className={styles.navicons}
              onClick={() => setshowAddTask(true)}
            />
            {showAddTask ? <AddTask hide={() => setshowAddTask(false)} /> : ''}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
