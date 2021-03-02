import { useState } from "react";
import DailyForecast from "./DailyForecast";
import WeeklyForecast from "./WeeklyForecast";
const Forecast = ({data}) => {
  const [isCelsius, setisCelsius] = useState(false)
  return ( 
  <div>
    <button onClick ={() => setisCelsius(!isCelsius)}>Celsius?</button>
    <DailyForecast 
    isCelsius = {isCelsius}
    info = {data.daily}/>
    <WeeklyForecast 
    isCelsius = {isCelsius}
    weekForecast = {data.sevenDay}/>
  </div>
  );
}
 
export default Forecast;