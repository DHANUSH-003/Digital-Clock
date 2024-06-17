import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

const App = () => {
  const[currentTime,setcurrentTime]=useState(new Date());
  useEffect(()=>{
   const timer=setInterval(()=>{
    setcurrentTime(new Date());
   },1000);
   return()=>clearInterval(timer)
  },[]);

   const formatTimeWithLeadingZero=(num)=>{
    return num<10? `0${num}`:num;
   }

   const formHour=(hour)=>{
    return hour===0?12:hour>12?hour-12:hour;
   }
  //  const formatDate=(date)=>{
  //   const options={weeday:"long", year:"numeric", month:"long", day:"numeric"};
  //   return date.toLocalDateString(undefined, options);
  //  };
   
 
  return (
    <div className="digital-clock">
      <h1>Digital Clock</h1>
      <div className="time">{formatTimeWithLeadingZero(formHour(currentTime.getHours()))}.{formatTimeWithLeadingZero(currentTime.getMinutes())}.{formatTimeWithLeadingZero(currentTime.getSeconds())}{currentTime.getHours()>=12?" PM":" AM"}</div>
      <div className="date">Monday, May 5, 2024</div>
    </div>
    
  )
}

export default App
