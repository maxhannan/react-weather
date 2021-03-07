import ForecastInfo from "./Forecast_Components/ForecastInfo";
import MainForecast from "./Forecast_Components/MainForecast"
import WeeklyForecast from "./Forecast_Components/WeeklyForecast";
import {useState} from 'react'
import Header from "./Header";

const Main = ({menuOpen, togMenu, data}) => {
  const [isCelsius, setisCelsius] = useState(false)

  const togCelsius = () => {
    setisCelsius((isCelsius) => !isCelsius)
  }
  
  return ( 
    <div className="main">
      <Header togMenu = {togMenu} menuOpen = {menuOpen} data = {data.daily}/>
      <MainForecast isCel = {isCelsius} togCel = {togCelsius} info = {data}/>
      <ForecastInfo data = {data.daily} />
      <WeeklyForecast isCel = {isCelsius} togCel = {togCelsius}  data = {data}/>
    </div>
  );
}
export default Main;
