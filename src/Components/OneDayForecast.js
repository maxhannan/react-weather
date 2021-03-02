const OneDayForecast = ({isCelsius, day}) => {
  return ( 
    <div>
      <h3>{day.day}</h3>
      <p>High: {isCelsius ? `${day.highC}` : `${day.highF}` }</p>

      <p>Low: {isCelsius ? `${day.lowC}` : `${day.lowF}` }</p>
    </div>
  );
}
 
export default OneDayForecast;