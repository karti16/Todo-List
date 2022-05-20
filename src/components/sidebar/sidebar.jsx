import styles from './sidebar.module.scss';
import { useStore } from '../../store/uiStore';
import { FiInbox, FiCalendar } from 'react-icons/fi';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BiCalendar } from 'react-icons/bi';

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
        <li key="inbox">
          <Link
            id="inbox"
            ref={inboxTab}
            onClick={handleClick}
            // className={`${item.title == 'inbox' ? styles.selected : ''} `}
            to="/Todo-List/inbox"
          >
            <div className={styles.icon}>
              <div>
                <FiInbox />
              </div>
              <span className={styles.date}></span>
            </div>
            inbox1
          </Link>
        </li>
        <li key="today">
          <Link
            id="today"
            ref={inboxTab}
            onClick={handleClick}
            // className={`${item.title == 'inbox' ? styles.selected : ''} `}
            to="/today"
          >
            <div className={styles.icon}>
              <div>
                <FiCalendar />
              </div>
              <span className={styles.date}>{new Date().getDate()}</span>
            </div>
            today
          </Link>
        </li>
        <li key="upcoming">
          <Link
            id="upcoming"
            ref={inboxTab}
            onClick={handleClick}
            // className={`${item.title == 'inbox' ? styles.selected : ''} `}
            to="/upcoming"
          >
            <div className={styles.icon}>
              <div>
                <BiCalendar />
              </div>
              <span className={styles.date}></span>
            </div>
            upcoming
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
