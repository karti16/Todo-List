import styles from './mainContent.module.scss';
import { useStore } from '../../store/uiStore';
import produce from 'immer';
import { useState, useCallback } from 'react';
import { FiTrash2, FiEdit3 } from 'react-icons/fi';
import { format, parseISO } from 'date-fns';
import EditTask from '../edittask/editTask';

const MainContent = () => {
  const { tasks, toggleComplete, delTask } = useStore((state) => ({
    tasks: state.tasks,
    toggleComplete: state.toggleComplete,
    delTask: state.delTask,
  }));
  const [showEditTask, setshowEditTask] = useState(false);
  const toggleFun = useStore((state) => state.togSidebar);

  const isComplete = (e) => {
    toggleComplete(e.target.id);
  };
  const deleteTask = (e) => {
    delTask(e.target.id);
  };

  const editTask = (e) => {
    setshowEditTask(true);
  };

  const listItem = (data) => {
    const d = new Date(data.date);
    return (
      <li id={data.id} key={data.id}>
        <label htmlFor={data.id} className={styles.taskCheckbox}>
          <input
            type="checkbox"
            id={data.id}
            name={data.id}
            checked={data.complete}
            onChange={isComplete}
          />

          <div>
            <div
              className={styles.task}
              style={{
                textDecoration: data.complete ? 'line-through' : '',
              }}
            >
              {data.task}
            </div>
            <div className={styles.description}>
              {data.description} <div>{format(d, 'dd MMM')}</div>
            </div>
            {showEditTask ? (
              <EditTask
                task={data.task}
                des={data.description}
                date={d}
                hide={() => setshowEditTask(false)}
              />
            ) : (
              ''
            )}
          </div>
          <div className={styles.editDel}>
            <FiTrash2 onClick={deleteTask} />
            <FiEdit3 onClick={editTask} />
          </div>
        </label>
      </li>
    );
  };

  return (
    <div className={styles.main}>
      <ul>
        {tasks.map((data) => {
          return listItem(data);
        })}
      </ul>
    </div>
  );
};

export default MainContent;
