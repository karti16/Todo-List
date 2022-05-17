import styles from './addTask.module.scss';
import ReactDOM from 'react-dom';
import { useState, useRef, useEffect } from 'react';
import { useStore } from '../../store/uiStore';
import { v4 as uuidv4 } from 'uuid';
import Datepicker from '../datepicker/datePicker';


const AddTask = ({ hide }) => {
  let btntype = useRef();
  const { tasks, addTask } = useStore((state) => ({
    tasks: state.tasks,
    addTask: state.addTask,
  }));

  const [taskInput, setTaskInput] = useState('');
  const [description, setDescription] = useState('');
  const [selected, setSelected] = useState(new Date());

  const getDate = (date) => {
    setSelected(date);
  };
  useEffect(() => {
    if (taskInput != '') {
      btntype.current.type = 'submit';
    } else {
      btntype.current.type = 'button';
    }
  });

  const handleAddTask = (e) => {
    if (btntype.current.type == 'submit') {
      e.preventDefault();
      addTask({
        id: uuidv4(),
        task: taskInput,
        description: description,
        category: 'inbox',
        complete: false,
        date: selected,
      });
      setTaskInput('');
      setDescription('');
      hide();
    }
  };

  return ReactDOM.createPortal(
    <div className={styles.navOverlay}>
      <div className={styles.navAddTask}>
        <div className={styles.inputSection}>
          <input
            type="text"
            placeholder="Task name"
            value={taskInput}
            onChange={(e) => {
              setTaskInput(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <Datepicker selectedDate={selected} getDate={getDate} />
        </div>
        <div className={styles.btnSection}>
          <button
            id={styles.taskSubmitBtn}
            ref={btntype}
            onClick={handleAddTask}
          >
            Add task
          </button>
          <button id={styles.cancelAddTaskBtn} onClick={hide}>
            Cancel
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  );
};

export default AddTask;
