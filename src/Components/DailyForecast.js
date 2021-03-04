import DailyInfo from "./DailyInfo";
import DailyTemp from "./DailyTemp";

const DailyForecast = ({data}) => {
  return ( 
    <div className="dailyForecast">
      <DailyTemp data = {data}/>
      <DailyInfo />
    </div>
  );
}
 
export default DailyForecast;