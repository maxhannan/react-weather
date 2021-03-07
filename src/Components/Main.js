import ForecastInfo from "./Forecast_Components/ForecastInfo";
import MainForecast from "./Forecast_Components/MainForecast"
import WeeklyForecast from "./Forecast_Components/WeeklyForecast";
import {useState} from 'react'

const Main = ({data}) => {
  const [isCelsius, setisCelsius] = useState(false)

  const togCelsius = () => {
    setisCelsius((isCelsius) => !isCelsius)
  }
  const locData = data.daily.location.split(',')
  return ( 
    <div className="main">
      <div className="locationData">
        <h2>
          <span style ={{fontWeight: '500', fontSize: '25pt', color: 'black'}}>
            {locData[0]}
          </span>
          , {locData[1]}
        </h2>
      </div>
      <MainForecast isCel = {isCelsius} togCel = {togCelsius} info = {data}/>
      <ForecastInfo />
      <WeeklyForecast isCel = {isCelsius} togCel = {togCelsius}  data = {data}/>
    </div>
  );
}
export default Main;
