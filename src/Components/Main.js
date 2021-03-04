import BtnHolder from './BtnHolder';
import DailyInfo from "./DailyInfo";
import DailyForecast from './DailyForecast';
import SevenDay from './SevenDay';


const Main = ({data}) => {
  return ( 
    <div className="main">
      <div className="dailyForecast"/>
      <div className="gridContainer">
        <SevenDay data = {data}/> 
        <DailyInfo data = {data}/>
      </div>
    </div>
    

  );
}
 
export default Main;