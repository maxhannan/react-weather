import Humidity from "./Forecast_Components/Humidity";
import MainForecast from "./Forecast_Components/MainForecast"
import Sunrise from "./Forecast_Components/Sunrise";
import WeeklyForecast from "./Forecast_Components/WeeklyForecast";
import Wind from "./Forecast_Components/Wind";
import MoonPhase from "./MoonPhase";

const Main = ({data}) => {
  return ( 
    <div className="main">
      <MainForecast data = {data.daily}/>
      <WeeklyForecast data = {data}/>
      <Sunrise/>
      <Wind />
      <MoonPhase />
    </div>
  );
}
export default Main;
