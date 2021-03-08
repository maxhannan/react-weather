import MoonPhase from './moonPhase';
import Wind from './Wind';
import Sunrise from './Sunrise';
import FeelsLike from './FeelsLike';
const ForecastInfo = ({isCel, data}) => {
  return ( 
    <div className="ForecastInfo">
      <Wind data = {data} />
      <MoonPhase />
      <Sunrise  data = {data} />
      <FeelsLike data = {data} isCel = {isCel} />
    </div>
  );
}
 
export default ForecastInfo;