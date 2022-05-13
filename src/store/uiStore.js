import create from 'zustand';

const toggleSidebar = create((set) => ({
  toggle: true,
  togSidebar: () => set((state) => ({ toggle: !state.toggle })),
}));

export { toggleSidebar };
