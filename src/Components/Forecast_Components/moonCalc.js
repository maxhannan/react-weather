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
  phase = Math.ceil(jd * 8); // scale fraction from 0-8 and round by adding 0.5
  phase = phase & 7; // 0 and 8 are the same so turn 8 into 0

  switch (phase) {
    case 0: phase = "New Moon"; break;
    case 1: phase = "Waxing Crescent Moon"; break;
    case 2: phase = "Quarter Moon"; break;
    case 3: phase = "Waxing Gibbous Moon"; break;
    case 4: phase = "Full Moon"; break;
    case 5: phase = "Waning Gibbous Moon"; break;
    case 6: phase = "Last Quarter Moon"; break;
    case 7: phase = "Waning Crescent Moon"; break;
    default: phase = "Something Wrong"; break;
  }
  return phase;
}
export default moon_phase