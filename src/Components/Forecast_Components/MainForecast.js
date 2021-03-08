import { useState } from "react";

const MainForecast = ({isCel, togCel, info}) => {
  const [fahActive, setFahActive] = useState(true)
  const data = info.daily
  const handleUnitChange = (e) => {
    const target = e.target.id
    if((fahActive && target === 'cel') || (!fahActive && target === 'fah') ){
      setFahActive(!fahActive)
      togCel()
    }
  }
  return ( 
    <div className="MainForecast">   
      <div className="btnContainer">
        <div 
        onClick = {handleUnitChange}
        className={fahActive ? "active btn cel" : "btn cel" }
        id = 'fah'
        >F°</div>
        <div
        onClick = {handleUnitChange} 
        id = 'cel'
        className={!fahActive ? "active btn fah" : "btn fah" }>C°</div>
      </div>
      <div className="testCont">
        <div className="imgTempCont">
          <h2>{data.descrip}</h2>
          <h1 style ={{fontWeight: '500'}}>{isCel ? data.tempC : data.tempF}°</h1>
          <h2>{isCel ? info.sevenDay[0].lowC : info.sevenDay[0].lowF}° / {isCel ? info.sevenDay[0].highC : info.sevenDay[0].highF}°</h2>
        </div>
      </div> 
    </div>
   );
}
export default MainForecast;