import { useState } from 'react'
import uniqid from 'uniqid'
const WeeklyForecast = ({isCel, togCel, data}) => {
  const fiveDays = data.sevenDay
  const hourly = data.hourly.slice(0,8)
  const [showWeek, setShowWeek] = useState(false)

  const handleChange = (e) => {
    const target = e.target.id
    if((showWeek && target === 'td') || (!showWeek && target === 'week') ){
      setShowWeek(!showWeek)
    }
  }
  return ( 
    <div className="weekContainer">
      <div className="selectorBtn">
          <div id = 'td' onClick = {handleChange} className={showWeek ? "todayBtn" :"todayBtn active"}>Today</div>
          <div id = 'week' onClick = {handleChange}  className={showWeek ? "weekBtn active" : "weekBtn"}>Week</div>
      </div>
      <div className="WeeklyForecast">
        {!showWeek && hourly.map(hour => {
          return (
            <div key = {uniqid()} className="forecastItem weekItem">
              <div className="dayContainer">
              {hour.hour}
              </div>
              <div className="imgContainer">
                <img src={hour.iconSrc} alt=""/>
              </div>
              <div className="tempContainer">
                {isCel ? hour.tempC : hour.tempF}°
              </div>
            </div>
          )
        })}
        {showWeek && fiveDays.map(day => {
        return (
          <div key = {uniqid()} className="forecastItem weekItem">
            <div className="dayContainer">
            {day.day}
            </div>
            <div className="imgContainer">
              <img src={day.iconSrc} alt=""/>
            </div>
            <div className="tempContainer">
              {isCel ? day.lowC : day.lowF}° / {isCel ? day.highC : day.highF}°
            </div>
          </div>
        )
      })}
      </div>
    </div>
   );
}
 
export default WeeklyForecast;