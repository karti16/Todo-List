import { useState, useRef, useEffect } from 'react';
import styles from './editTask.module.scss';
import { useStore } from '../../store/uiStore';
import Datepicker from '../datepicker/datePicker';

const EditTask = ({ closeEdit, id }) => {
  if (id == '') {
    return null;
  }
  let btntype = useRef();

  const { tasks, toggleComplete, delTask, updateTask } = useStore((state) => ({
    tasks: state.tasks,
    toggleComplete: state.toggleComplete,
    delTask: state.delTask,
    updateTask: state.updateTask,
  }));

  const taskDetails = tasks.filter((item) => item.id == id)[0];
  console.log(taskDetails.id);
  const [taskInput, setTaskInput] = useState(taskDetails.task);
  const [description, setDescription] = useState(taskDetails.description);
  const [selected, setSelected] = useState(new Date(taskDetails.date));

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

  const handleUpdateTask = (e) => {
    if (btntype.current.type == 'submit') {
      e.preventDefault();
      updateTask({
        id: id,
        task: taskInput,
        description: description,
        category: 'inbox',
        complete: false,
        date: selected,
      });
      setTaskInput('');
      setDescription('');
      closeEdit();
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
          value={description}
          placeholder="Description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>
      <div>
        <Datepicker
          classname={styles.editDate}
          selectedDate={selected}
          getDate={getDate}
        />
      </div>
      <div className={styles.btnSection}>
        <button
          id={styles.taskSubmitBtn}
          ref={btntype}
          onClick={handleUpdateTask}
        >
          Save
        </button>
        <button id={styles.cancelAddTaskBtn} onClick={closeEdit}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditTask;
