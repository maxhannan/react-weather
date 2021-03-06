import uniqid from 'uniqid'
const WeeklyForecast = ({data}) => {
  const fiveDays = data.sevenDay.slice(1,6)
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
            {day.highF}°
          </div>
        </div>
      )
    })}
    </div>
   );
}
 
export default WeeklyForecast;