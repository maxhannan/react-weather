
const DailyTemp = ({data}) => {
  return ( 
    <div className="dailyTemp">
      <div className="weatherIcon">
        <img src={data.iconSrc} alt="weathericon"/>
      </div>
      <div className="info">
        <div className="location">{data.location.split(',')[0]}<br/>{data.descrip}</div>
        <div className="temp">{data.tempF}°</div>
      </div>
    </div>
  );
}
 
export default DailyTemp;