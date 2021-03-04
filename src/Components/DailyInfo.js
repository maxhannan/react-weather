import sunrise from '../assets/sunrise.png'
import sunset from '../assets/sunset.png'
import humid from '../assets/humid.png'
import wind from '../assets/wind.png'
import {TiArrowUpOutline} from 'react-icons/ti'
import styled from 'styled-components'

const DailyInfo = ({data}) => {
  return ( 
    <div className="dailyInfo">
      <div className="item wind">
        <div className="windContainer">
          <img src={wind} alt = 'sunrise'/>
        </div>
        <div className="windSpeed">
          {data.daily.wind} mph
        </div>
        <div className=" arrow windContainer" 
        style = {{transform: `rotate(${data.daily.windDir}deg)`}}>
          <TiArrowUpOutline />
        </div>
      </div>
      <div className="item precip">
        <div className="sunContainer">
          <img src={humid} alt = 'sunrise'/>
        </div>
        <div className="sunText">
          {data.daily.humidity}%
        </div>
      </div>
      <div className="item sunrise">
        <div className="sunContainer">
          <img src={sunrise} alt = 'sunrise'/>
        </div>
        <div className="sunText">
          {data.daily.sunrise}
        </div>
      </div>
      <div className="item sunset">
        <div className="sunContainer">
          <img src={sunset} alt = 'sunrise'/>
        </div>
        <div className="sunText">
          {data.daily.sunrise}
        </div>
      </div>
      <div className="item clock"></div>
    </div>
  );
}
 
export default DailyInfo;
