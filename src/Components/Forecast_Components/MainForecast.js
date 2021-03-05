const MainForecast = ({data}) => {
  return ( 
    <div className="forecastItem MainForecast">
      <div className="location">
        {/* <h1>{data.location.split(',')[0]}</h1>
        <h2>{data.descrip}</h2>
        <h1>{data.tempF}°</h1> */}
      </div>
      <div className="mainImgContainer">
        {/* <img src={data.iconSrc} alt="weather icon"/> */}
      </div> 
      <div className="mainTemp"></div> 
    </div>
   );
}
 
export default MainForecast;