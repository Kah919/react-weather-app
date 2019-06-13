import React from "react";
let moment = require("moment")

const Day = (reading) => {
  let newDate = new Date() // gives us new date and time
  const weekDay = reading.reading.dt * 1000
  newDate.setTime(weekDay)
  const imgURL = `owf owf-${reading.reading.weather[0].id} owf-5x` // using owfont to get weather icon matching weather id

  return(
      <div className="day-card">
        <h1>{moment(newDate).format('dddd')}</h1>
        <h4>{moment(newDate).format('MMMM Do')}</h4>
        <i className={imgURL}></i>
        <h2>{Math.round(reading.reading.main.temp)} °F</h2>
        <div>
          <p>{reading.reading.weather[0].description}</p>
        </div>
      </div>
  )
}

export default Day;
