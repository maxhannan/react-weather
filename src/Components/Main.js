import '../Styles/dailyInfo.scss'
import BtnHolder from './BtnHolder';
import DailyForecast from './DailyForecast';
import SevenDay from './SevenDay';

const Main = ({data}) => {
  return ( 
    <div className="main">
      <BtnHolder/>
      <DailyForecast data = {data.daily}/>
      <SevenDay/>
    </div>
  );
}
 
export default Main;