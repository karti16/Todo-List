import { useState, useRef, useEffect } from 'react';
import styles from './editTask.module.scss';
import { useStore } from '../../store/uiStore';
import { v4 as uuidv4 } from 'uuid';
import Datepicker from '../datepicker/datePicker';

const EditTask = ({ task, des, date, hide }) => {
  let btntype = useRef();
  const { tasks, addTask } = useStore((state) => ({
    tasks: state.tasks,
    addTask: state.addTask,
  }));

  const [taskInput, setTaskInput] = useState(task);
  const [description, setDescription] = useState(des);
  const [selected, setSelected] = useState(date);

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

  return (
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
        <button id={styles.taskSubmitBtn} ref={btntype} onClick={handleAddTask}>
          Save
        </button>
        <button id={styles.cancelAddTaskBtn} onClick={hide}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditTask;
