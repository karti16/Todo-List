import styles from './mainContent.module.scss';
import { useStore } from '../../store/uiStore';
import { useEffect, useState } from 'react';
import { FiTrash2, FiEdit3 } from 'react-icons/fi';
import { format, parseISO } from 'date-fns';
import EditTask from '../edittask/editTask';

const MainContent = () => {
  const { tasks, toggleComplete, delTask } = useStore((state) => ({
    tasks: state.tasks,
    toggleComplete: state.toggleComplete,
    delTask: state.delTask,
  }));

  const [editId, setEditId] = useState('b7257856-3fe2-4f41-bf49-392eb04a4137');

  useEffect(() => {
    console.log('updating');
  }, [tasks]);

  const isComplete = (e) => {
    toggleComplete(e.target.id);
  };

  const closeEdit = () => {
    setEditId('');
  };
  const listItem = (data) => {
    const d = new Date(data.date);

    return (
      <div key={data.id} className={styles.taskLi}>
        <li
          id={data.id}
          key={data.id}
          className={
            (styles.taskLi, data.id == editId ? styles.hideCurrentTask : '')
          }
        >
          <label htmlFor={data.id} className={styles.taskCheckbox}>
            <input
              type="checkbox"
              id={data.id}
              name={data.id}
              checked={data.complete}
              onChange={isComplete}
            />
            <div className={styles.taskDes}>
              <div
                onClick={() => setEditId(data.id)}
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
            </div>
            <div className={styles.editDel}>
              <FiTrash2
                className={styles.delIcon}
                onClick={() => delTask(data.id)}
              />
              <FiEdit3
                className={styles.editIcon}
                onClick={() => setEditId(data.id)}
              />
            </div>
          </label>
        </li>
        {data.id == editId ? (
          <EditTask id={editId} closeEdit={closeEdit} />
        ) : (
          ''
        )}
      </div>
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
