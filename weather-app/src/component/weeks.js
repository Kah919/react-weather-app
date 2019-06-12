import React, { Component } from "react";
import Day from "./day"
// import API from "./apiKeys"

class Weeks extends Component {
  state = {
    fullData: [],
    dailyData: []
  }

  componentDidMount = () => {
    const weatherURL = "http://api.openweathermap.org/data/2.5/forecast?zip=10002&units=imperial&APPID=35a1b679220928dae82f450b592b3e22"

    fetch(weatherURL)
      .then(res => res.json())
      .then(data => {
        const dailyData = data.list.filter(reading => {
          return reading.dt_txt.includes("03:00:00")
        })

        this.setState({
          fullData: data,
          dailyData: dailyData
        }, () => console.log(this.state))
      })
  }

  dayCards = () => {
    return this.state.dailyData.map((reading, idx) => {
      return <Day reading={reading} key={idx} />
    })
  }

  render() {
    return(
      <div>{this.dayCards()}</div>
    )
  }
}

export default Weeks
