
import DailyTemp from "./DailyTemp";

const DailyForecast = ({data}) => {
  return ( 
    <div className="dailyForecast">
      <DailyTemp data = {data}/>
     
    </div>
  );
}
 
export default DailyForecast;