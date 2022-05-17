import create from 'zustand';
import produce from 'immer';
import { v4 as uuidv4 } from 'uuid';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set) => ({
      toggle: true,
      togSidebar: () => set((state) => ({ toggle: !state.toggle })),

      tasks: [
        {
          id: uuidv4(),
          task: 'buy milk',
          description: '1 liter of milk',
          category: 'inbox',
          complete: true,
          date: null,
        },
      ],

      addTask: (data) =>
        set(
          produce((draftState) => {
            draftState.tasks.push({
              id: data.id,
              task: data.task,
              description: data.description,
              category: data.category,
              complete: data.complete,
              date: data.date,
            });
          })
        ),
      toggleComplete: (id) =>
        set(
          produce((draftState) => {
            draftState.tasks.filter((item) => {
              if (item.id == id) {
                item.complete = !item.complete;
              }
            });
          })
        ),
      delTask: (id) =>
        set(
          produce((draftState) => {
            draftState.tasks.splice(
              draftState.tasks.findIndex((item) => item.id == id),
              1
            );
          })
        ),
    }),
    {
      name: 'taskStorage',
    }
  )
);

export { useStore };
