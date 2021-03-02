
const DailyForecast = ({isCelsius, info}) => {

  return ( 
  <div>
    <h1>{info.location}</h1>
    <h2> {isCelsius ? `${info.tempC}` : `${info.tempF}` }</h2>
  </div>
  );
}
 
 
export default DailyForecast;