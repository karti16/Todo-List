const sidebarList = [
  {
    title: 'inbox',
    url: '#',
    iconName: 'FiInbox',
    iconSource: 'fi',
    url: '/inbox',
  },
  {
    title: 'today',
    url: '#',
    iconName: 'FiCalendar',
    iconSource: 'fi',
    url: '/today',
  },
  {
    title: 'upcoming',
    url: '#',
    iconName: 'BiCalendar',
    iconSource: 'bi',
    url: '/upcoming',
  },
];

const date = new Date().getDate();
sidebarList[1].date = date;
export default sidebarList;
