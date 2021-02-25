import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Charts from '../Component/chart/Charts';
import "react-datepicker/dist/react-datepicker.css";
import './Datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
const todayDate= new Date();
console.log(todayDate)
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

     
  <DatePicker showYearDropdown
      dateFormatCalendar="MMMM"
      minDate={new Date()}
      scrollableYearDropdown selected={date.currentDate} placeholderText="Start Date" onChange = {date => changeDate(date)} className="datpicker-input"/>
  <DatePicker showYearDropdown dateFormatCalendar="MMMM"
    
    scrollableYearDropdown  minDate = {date.maxDate} placeholderText="End Date" selected = {date.maxDate} onChange = {date => changeMaxDate(date)} className="datpicker-input"/>
  <button type="submit" className="btn btn-primary" disabled = {returnCondition()} className="submit-btn">Apply</button>
      </div>
     
      <Charts></Charts>
      </div>
  
  );
};


export default Daterange;