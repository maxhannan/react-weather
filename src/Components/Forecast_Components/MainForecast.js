const MainForecast = ({data}) => {
  return ( 
    <div className=" MainForecast">
      <div className="forecastItem location">
        <h1 style = {{fontSize: '32pt', fontWeight: '500'}} id = 'loco'>{data.location.split(',')[0]}</h1>
        <h2 id = 'descrip'>{data.descrip}</h2>
      </div>
      <div className='forecastItem MainTemp'>
      <h1 style = {{fontSize: '90pt', fontWeight: '500'}}>{data.tempF}°</h1>
      </div> 
      <div className="forecastItem mainImgContainer">
        <h1 style = {{fontSize: '32pt', fontWeight: '500'}} id = 'loco'>{data.location.split(',')[0]}</h1>
        <img src={data.iconSrc} alt="weather icon"/>
        <h2 id = 'descrip'>{data.descrip}</h2>
      </div> 
    </div>
   );
}
export default MainForecast;