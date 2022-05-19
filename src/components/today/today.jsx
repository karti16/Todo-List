import styles from './today.module.scss';
import { useStore } from '../../store/uiStore';
import { useEffect } from 'react';
import ListItems from '../listitems/listItems';
import { isTaskToday } from '../../js-funtions/js-functions';
import { format } from 'date-fns';

const Today = () => {
  const { tasks } = useStore((state) => ({
    tasks: state.tasks,
  }));

  useEffect(() => {}, [tasks]);

  const filteredTodayTask = tasks.filter(
    (item) => isTaskToday(item.date) == 'today'
  );

  return (
    <div className={styles.main}>
      <div className={styles.title_today}>
        Today <span>{format(new Date(), 'EEE dd MMM')}</span>
      </div>
      <ul>
        {filteredTodayTask.map((data) => {
          return <ListItems key={data.id} data={data} />;
        })}
      </ul>
    </div>
  );
};

export default Today;
