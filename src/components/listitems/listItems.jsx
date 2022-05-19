import styles from './listItems.module.scss';
import { useStore } from '../../store/uiStore';
import { useEffect, useState } from 'react';
import { FiTrash2, FiEdit3 } from 'react-icons/fi';
import EditTask from '../edittask/editTask';
import { format, parseISO } from 'date-fns';

export default function ListItems({ data }) {
  const { toggleComplete, delTask } = useStore((state) => ({
    toggleComplete: state.toggleComplete,
    delTask: state.delTask,
  }));

  const [editId, setEditId] = useState('');

  useEffect(() => {}, [data]);

  const isComplete = (e) => {
    toggleComplete(e.target.id);
  };

  const closeEdit = () => {
    setEditId('');
  };

  const d = new Date(data.date);

  return (
    <div key={data.id} className={styles.taskLi}>
      <li
        id={data.id}
        key={data.id}
        className={data.id == editId ? styles.hideCurrentTask : ''}
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
              id={data.id}
              onClick={(e) => setEditId(e.target.id)}
              className={styles.task}
              style={{
                textDecoration: data.complete ? 'line-through' : '',
              }}
            >
              {data.task}
            </div>
            <div className={styles.description}>
              {data.description}
              <div>{format(d, 'dd MMM')}</div>
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
        <div>
          <EditTask id={`${data.id}`} closeEdit={closeEdit} />
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
