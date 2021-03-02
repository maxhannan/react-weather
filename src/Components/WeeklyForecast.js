import OneDayForecast from './OneDayForecast'
import uniqid from 'uniqid'
const WeeklyForecast = ({ isCelsius, weekForecast }) => {
  return ( 
    <div>
      {weekForecast.map(weekday => 
      <OneDayForecast 
      key = {uniqid()} 
      day = {weekday}
      isCelsius = {isCelsius}
      /> )}
    </div>
   );
}
 
export default WeeklyForecast;