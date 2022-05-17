import { FiMenu, FiHome, FiPlus } from 'react-icons/fi';
import SearchField from './searchField/searchField';
import { useStore } from '../../store/uiStore';
import styles from './navbar.module.scss';
import AddTask from '../addtask/addTask';
import { useState } from 'react';

function Navbar() {
  const toggleFun = useStore((state) => state.togSidebar);

  const [showAddTask, setshowAddTask] = useState(false);

  return (
    <div className={styles.header}>
      <nav>
        <ul>
          <li>
            <FiMenu className={styles.navicons} onClick={toggleFun} />
          </li>
          <li>
            <FiHome className={styles.navicons} />
          </li>
          <li className="">
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
