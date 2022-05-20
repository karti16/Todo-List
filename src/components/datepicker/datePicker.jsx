import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Datepicker = ({ classname, selectedDate, getDate }) => {
  return (
    <DatePicker
      className={classname}
      selected={selectedDate}
      onChange={(date) => getDate(date)}
      dateFormat="dd MMM"
      minDate={new Date()}
    />
  );
};

export default Datepicker;
