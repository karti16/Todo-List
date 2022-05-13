import { FiMenu, FiHome } from 'react-icons/fi';
import SearchField from './searchField/searchField';
import { toggleSidebar } from '../../store/uiStore';
import styles from './navbar.module.scss';

function Navbar() {
  const toggleFun = toggleSidebar((state) => state.togSidebar);

  return (
    <div className={styles.header}>
      <nav>
        <ul>
          <li className={styles.menuIcon}>
            <FiMenu onClick={toggleFun} />
          </li>
          <li className={styles.homeIcon}>
            <FiHome />
          </li>
          <li className="">
            <SearchField />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
