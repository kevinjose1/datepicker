import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Daterange = () => {
 const [date, newDate ] = useState({
   currentDate: '',
   maxDate:''
 })

 const changeDate = (data) => {
    newDate({
        currentDate : data,
        maxDate : data
    });
    
 }
 const changeMaxDate = (data) => {
    newDate({
        currentDate : date.currentDate,
        maxDate : data,
       
    }); 
}
const returnCondition = () => {
   if(date.currentDate) {
    console.log('return false');
       return false;
   } else{
    console.log('return true');
     return true;  
   
   }
  
}
   return (
      <div > 
      <div className="form">

     
  <DatePicker  selected={date.currentDate} placeholderText="Start Date" onChange = {date => changeDate(date)} className="datpicker-input"/>
  <DatePicker minDate = {date.maxDate} placeholderText="End Date" selected = {date.maxDate} onChange = {date => changeMaxDate(date)} className="datpicker-input"/>
  <button type="submit" className="btn btn-primary" disabled = {returnCondition()} className="submit-btn">Apply</button>
      </div>
      </div>
  
  );
};

export default Daterange;