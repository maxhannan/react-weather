import uniqid from 'uniqid'
const SevenDay = ({data}) => {
  const sevenDays = data.sevenDay.slice(1,8)
  return ( 
  <div className="sevenDayContainer">
    {sevenDays.map(day => {
      return (
        <div key = {uniqid()} className="sevenItem">
          <div className="dayContainer">
          {day.day}
          </div>
          <div className="imgContainer">
            <img src={day.iconSrc} alt=""/>
          </div>
          <div className="tempContainer">
            {day.highF}°
          </div>
        </div>
      )
    })}
  </div>
);
}
 
export default SevenDay;