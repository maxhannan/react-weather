import {WiSunrise} from 'react-icons/wi'
const Sunrise = ({data}) => {
  return ( 
    <div className="forecastItem sunrise">
      <h4 style = {{fontWeight: '400'}}>Sunrise</h4>
      <div className="sunriseIcon">
        <WiSunrise/>
      </div>
      <h4>{data.sunrise} am</h4> 
    </div>
  );
}
 
export default Sunrise;