import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';

const Datepicker = ({ selectedDate, getDate }) => {

    
  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date) => getDate(date)}
      dateFormat="dd MMM"
      minDate={new Date()}
    />
  );
};

export default Datepicker;
