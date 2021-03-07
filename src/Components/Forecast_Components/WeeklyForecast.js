import uniqid from 'uniqid'
const WeeklyForecast = ({isCel, togCel, data}) => {
  const fiveDays = data.sevenDay
  return ( 
    <div className="WeeklyForecast">
      {fiveDays.map(day => {
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
   );
}
 
export default WeeklyForecast;