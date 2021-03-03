
const Forecast = ({data, isCelsius}) => {

  return ( 
  <div id = 'forecast'>
    <div className="weatherInfo">
      <h1>{data.daily.location.split(',')[0]}</h1>
      <h2>{data.daily.descrip}</h2>
      <h2>{data.daily.time.toLocaleString()}</h2>
    </div>
    <div className="todayForecast">
      <h1>{data.daily.tempF}°</h1>
      <h2>{data.sevenDay[0].lowF}° / {data.sevenDay[0].highF}°</h2>
    </div>
  </div>
  );
}
 
export default Forecast;