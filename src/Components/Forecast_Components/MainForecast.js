const MainForecast = ({data}) => {
  return ( 
    <div className="forecastItem MainForecast">
      <div className="mainImgContainer">
        <img src={data.iconSrc} alt="weather icon"/>
      </div> 
      <div className='  MainTemp'>
        <h1 style ={{fontWeight: '500'}}>{data.location.split(',')[0]}</h1>
        <h2>{data.descrip}</h2>
        <h1 style ={{fontWeight: '500', fontSize: '8vw'}}>{data.tempF}°</h1>
      </div> 
     
    </div>
   );
}
export default MainForecast;