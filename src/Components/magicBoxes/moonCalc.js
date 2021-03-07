function moon_phase(date) { // ported from http://www.voidware.com/moon_phase.htm
  let year = date.getYear();
  let month = date.getMonth();
  let day = date.getDay();

  if (month < 3) {
      year--;
      month += 12;
  }

  ++month;

  let jd = 365.25 * year + 30.6 * month + day - 694039.09; // jd is total days elapsed
  jd /= 29.53; // divide by the moon cycle (29.53 days)
  let phase = parseInt(jd, 10); // int(jd) -> phase, take integer part of jd
  jd -= phase; // subtract integer part to leave fractional part of original jd
  phase = Math.floor(jd * 8); // scale fraction from 0-8 and round by adding 0.5
  phase = phase & 7; // 0 and 8 are the same so turn 8 into 0

  switch (phase) {
    case 0: phase = {text: "New Moon", id: 0}; break;
    case 1: phase ={text: "Waxing Crescent ", id: 1} ; break;
    case 2: phase = {text: "Quarter Moon", id: 2} ; break;
    case 3: phase = {text: "Waxing Gibbous ", id: 3} ; break;
    case 4: phase = {text: "Full Moon", id: 4}; break;
    case 5: phase = {text: "Waning Gibbous ", id: 5}; break;
    case 6: phase = {text: "Last Quarter Moon", id: 6}; break;
    case 7: phase = {text: "Waning Crescent ", id: 7}; break;
    default: phase = {text: "Something Wrong", id: 8}; break;
  }
  return phase;
}
export default moon_phase