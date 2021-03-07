import moon_phase from '../magicBoxes/moonCalc'

import {
  WiMoonAltNew, 
  WiMoonAltWaxingCrescent2, 
  WiMoonAltFirstQuarter,
  WiMoonAltWaxingGibbous3,
  WiMoonAltFull,
  WiMoonAltWaningGibbous4,
  WiMoonAltThirdQuarter,
  WiMoonAltWaningCrescent6
} from 'react-icons/wi'

const MoonPhase = () => {
  let element;
  switch (moon_phase(new Date()).id){
    case 0: element = <WiMoonAltNew/>; break;
    case 1: element = <WiMoonAltWaxingCrescent2/>; break;
    case 2: element = <WiMoonAltFirstQuarter/>; break;
    case 3: element = <WiMoonAltWaxingGibbous3/>; break;
    case 4: element = <WiMoonAltFull/>; break;
    case 5: element = <WiMoonAltWaningGibbous4/>; break;
    case 6: element = <WiMoonAltThirdQuarter/>; break;
    case 7: element = <WiMoonAltWaningCrescent6/>; break;
    default: element = <h1>Something WRONG</h1>; break;
  }
  return ( 
    <div className="forecastItem moon">
      <h4 style = {{fontWeight: '400'}}>Moon Phase</h4>
      <div className="moonIcon">
        {element}
      </div>
      <h4>{moon_phase(new Date()).text}</h4>
    </div>
  );
}
 
export default MoonPhase;