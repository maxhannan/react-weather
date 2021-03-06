import MainForecast from "./Forecast_Components/MainForecast"
import WeeklyForecast from "./Forecast_Components/WeeklyForecast";


const Main = ({data}) => {
  return ( 
    <div className="main">
      <MainForecast data = {data.daily}/>
      <WeeklyForecast data = {data}/>
    </div>
  );
}
export default Main;
