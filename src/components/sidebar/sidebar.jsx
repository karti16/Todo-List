import styles from './sidebar.module.scss';
import { useStore } from '../../store/uiStore';
import sidebarList from './sidebarList';
import { FiMenu, FiHome } from 'react-icons/fi';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const toggle = useStore((state) => state.toggle);
  const isHome = useStore((state) => state.isHome);
  const setIsHome = useStore((state) => state.setIsHome);
  const inboxTab = useRef();

  const handleClick = (e) => {
    Array.prototype.slice
      .call(document.querySelectorAll('a'))
      .forEach(function (element) {
        element.classList.remove(styles.selected);
      });

    e.target.classList.toggle(styles.selected);

    setIsHome(false);
  };

  useEffect(() => {
    if (isHome) {
      Array.prototype.slice
        .call(document.querySelectorAll('a'))
        .forEach(function (element) {
          element.classList.remove(styles.selected);
        });
      document.getElementById('inbox').classList.add(styles.selected);
    }
  }, [isHome]);

  return (
    <div className={`${styles.sidebar} ${toggle ? styles.open : ''}`}>
      <ul>
        {sidebarList.map((item) => {
          return (
            <li key={item.title}>
              <Link
                id={item.title}
                ref={inboxTab}
                onClick={handleClick}
                className={`${item.title == 'inbox' ? styles.selected : ''} `}
                to={item.url}
              >
                {getIcons(item.iconName, item.iconSource, item.date)}
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

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
