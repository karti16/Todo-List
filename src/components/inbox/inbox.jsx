import styles from './inbox.module.scss';
import { useStore } from '../../store/uiStore';
import { useEffect } from 'react';
import ListItems from '../listitems/listItems';

const Inbox = () => {
  const { tasks } = useStore((state) => ({
    tasks: state.tasks,
  }));

  useEffect(() => {}, [tasks]);

  return (
    <div className={styles.main}>
      <div className={styles.title_inbox}>Inbox</div>
      <ul>
        {tasks.map((data) => {
          return <ListItems key={data.id} data={data} />;
        })}
      </ul>
    </div>
  );
};

export default Inbox;
