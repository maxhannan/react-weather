import '../Styles/dailyInfo.scss'
import BtnHolder from './BtnHolder';
import DailyInfo from "./DailyInfo";
import DailyForecast from './DailyForecast';
import SevenDay from './SevenDay';


const Main = ({data}) => {
  return ( 
    <div className="main">
      <DailyForecast data = {data.daily}/>
      <DailyInfo />
      <SevenDay/> 
    </div>
    

  );
}
 
export default Main;