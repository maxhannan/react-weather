import {WiWindDeg} from 'react-icons/wi'

const Wind = ({data}) => {
  return ( 
    <div className=" forecastItem wind">
      <h4 style = {{fontWeight: '400'}}>Wind</h4>
      <div className="windIcon">
        <WiWindDeg style = {{transform: `rotate(${data.windDir}deg)`}}/>
      </div>
      <h4>{data.wind} mph</h4> 
    </div>
   );
}
 
export default Wind;