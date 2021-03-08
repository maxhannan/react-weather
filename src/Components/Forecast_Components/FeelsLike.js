import { WiThermometer} from 'react-icons/wi'

const FeelsLike = ({data, isCel}) => {
  return ( 
    <div className="forecastItem feelsLike">
      <h4 style = {{fontWeight: '400'}}>Feels Like</h4>
      <div className="feelsIcon">
        <WiThermometer/>
      </div>
      <h4>{isCel ? data.feelsLikeC : data.feelsLikeF}°</h4> 
    </div>
   );
}
 
export default FeelsLike;