import React, { Component } from "react";
// import API from "./apiKeys"

class Weeks extends Component {
  componentDidMount = () => {
    const weatherURL = "http://api.openweathermap.org/data/2.5/forecast?zip=10002&units=imperial&APPID=35a1b679220928dae82f450b592b3e22"

    fetch(weatherURL)
      .then(res => res.json())
      .then(data =>
        console.log(data.list)
      )
  }

  render() {
    return(
      <div> HI </div>
    )
  }
}

export default Weeks
