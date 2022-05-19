import { format } from 'date-fns';

export const isTaskToday = (date) => {
  const taskDate = parseInt(format(new Date(date), 'd'));
  const todayDate = parseInt(format(new Date(), 'd'));
  let seventhDayFromNow = new Date(
    new Date().setDate(new Date().getDate() + 7)
  );

  seventhDayFromNow = parseInt(format(seventhDayFromNow, 'd'));

  if (taskDate == todayDate) {
    return 'today';
  }
  if (taskDate > todayDate && taskDate <= seventhDayFromNow) {
    return 'week';
  }
};
