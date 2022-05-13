const sidebarList = [
  { title: 'inbox', url: '#', iconName: 'FiInbox', iconSource: 'fi' },
  {
    title: 'today',
    url: '#',
    iconName: 'FiCalendar',
    iconSource: 'fi',
  },
  { title: 'upcoming', url: '#', iconName: 'BiCalendar', iconSource: 'bi' },
];

const date = new Date().getDate();
sidebarList[1].date = date;
export default sidebarList;
