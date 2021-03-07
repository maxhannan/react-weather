import MoonPhase from './moonPhase';
import {WiWindDeg} from 'react-icons/wi'
const ForecastInfo = ({data}) => {
  return ( 
    <div className="ForecastInfo">
      <div className=" forecastItem wind">
        <h4 style = {{fontWeight: '400'}}>Wind</h4>
        <div className="windIcon">
          <WiWindDeg style = {{transform: `rotate(${data.windDir}deg)`}}/>
        </div>
        <h4>{data.wind} mph</h4> 
      </div>
      <MoonPhase />
      <div className="forecastItem sunrise"></div>
      <div className="forecastItem humidity"></div>
    </div>
  );
}
 
export default ForecastInfo;