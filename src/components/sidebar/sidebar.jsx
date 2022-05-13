import styles from './sidebar.module.scss';
import { toggleSidebar } from '../../store/uiStore';
import sidebarList from './sidebarList';
import { FiMenu, FiHome } from 'react-icons/fi';
import { useState, useEffect } from 'react';

function Sidebar() {
  const toggle = toggleSidebar((state) => state.toggle);

  return (
    <div className={`${styles.sidebar} ${toggle ? styles.open : ''}`}>
      <ul>
        {sidebarList.map((item) => {
          return (
            <li key={item.title}>
              {getIcons(item.iconName, item.iconSource, item.date)}
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function getIcons(iconName, iconSource, date) {
  const [icon, setIcon] = useState();
  useEffect(() => {
    if (iconSource == 'fi') {
      import('react-icons/fi').then((icons) => setIcon(icons[iconName]));
    }
    if (iconSource == 'bi') {
      import('react-icons/bi').then((icons) => setIcon(icons[iconName]));
    }
  }, []);
  return (
    <div className={styles.icon}>
      <div>{icon}</div>
      <span className={styles.date}>{date}</span>
    </div>
  );
}

export default Sidebar;
