// Grabs Weather Data and return formatted info
import oned from '../../assets/01d.png'
import onen from '../../assets/01n.png'
import twod from '../../assets/02d.png'
import twon from '../../assets/02n.png'
import threed from '../../assets/03d.png'
import threen from '../../assets/03n.png'
import fourd from '../../assets/04d.png'
import fourn from '../../assets/04n.png'
import nined from '../../assets/09d.png'
import ninen from '../../assets/09n.png'
import tend from '../../assets/10d.png'
import tenn from '../../assets/10n.png'
import elevend from '../../assets/11d.png'
import elevenn from '../../assets/11n.png'
import thirtd from '../../assets/13d.png'
import thirtn from '../../assets/13n.png'
import fifd from '../../assets/50d.png'
import fifn from '../../assets/50n.png'
export const getWeather = async (search) => {
  // openWeather Key
  const apiKey = '070d5b93cd86e7baa71b2a5bf2276467'
  const baseUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat='
  const nameData = await getName(search)
  
  const coords = nameData.geometry.location
  const name = nameData.formatted_address

  const oneCallURL = `${baseUrl}${coords.lat}&lon=${coords.lng}&appid=${apiKey}`
  
  const response = await fetch(oneCallURL, { mode: 'cors' })
  const data = await response.json()
  return weatherFormatter(data, name)
}

const getName = async (search) => {
  // Google Key
  const apiKey = 'AIzaSyAzvI9cu1Zk8OegSCLn8Yv0BTagQSWDMFQ'
  const baseurl = 'https://maps.googleapis.com/maps/api/geocode/json?address='
  const url =`${baseurl}${search}&key=${apiKey}`
  
  const response = await fetch(url, { mode: 'cors' })
  const data = await response.json()

  return (data.results[0])
}

const weatherFormatter = (info, placeName) => {
  const current = info.current
  const sunrise = getDay(current.sunrise)
  const sevenDayForecast = info.daily.map(day => {
    const dayinfo = {
      day: weekDay[getDay(day.dt).getDay()],
      highC: toCelsius(day.temp.max),
      lowC: toCelsius(day.temp.min),
      highF: toFahrenheit(day.temp.max),
      lowF: toFahrenheit(day.temp.min),
      descrip: day.weather[0].description,
      iconSrc: getIconURL(day.weather[0].icon)
    }
    return dayinfo
  })
  const hourlyData = info.hourly.map(hour => {
    const timeStr = new Date(hour.dt * 1000).toLocaleTimeString().split(':')
    const hourInfo = {
      hour: timeStr[0] + ':' + timeStr[2],
      tempC: toCelsius(hour.temp),
      tempF: toFahrenheit(hour.temp),
      descrip: hour.weather[0].description,
      iconSrc: getIconURL(hour.weather[0].icon)
    }
    return hourInfo
  })

  const weatherData = {
    daily: {
      location: placeName,
      time: getDay(current.dt).toDateString().split(' ').splice(0,3).join(' '),
      timeStr: getDay(current.dt).toLocaleTimeString(),
      day: weekDay[getDay(current.dt).getDay()],
      tempC: toCelsius(current.temp),
      tempF: toFahrenheit(current.temp),
      wind: (current.wind_speed * 2.237).toFixed(0),
      windDir: current.wind_deg,
      sunrise: sunrise.toLocaleTimeString().split(':').slice(0,2).join(':'),
      humidity: current.humidity,
      descrip: current.weather[0].description,
      feelsLikeC: toCelsius(current.feels_like),
      feelsLikeF: toFahrenheit(current.feels_like),
      iconSrc: getIconURL(current.weather[0].icon)
    },
    hourly: [...hourlyData],
    sevenDay: [...sevenDayForecast]
  }
  console.log(weatherData)
  return weatherData
}

// HELPER FUNCTIONS
const weekDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const toCelsius = (K) => Math.floor(K - 273.15)
const toFahrenheit = (K) => Math.floor(toCelsius(K) * (9 / 5) + 32)
const getDay = (date) => new Date(date * 1000) // converts unix timestamp to date

const getIconURL = (iconId) => { // retrieves appropiate icon url based on weather code from api
  let url
    switch (iconId) {
      case '01d': 
        url = oned;
        break
      case '01n': 
        url = onen;
        break
      case '02d': 
        url = twod;
        break
      case '02n': 
        url = twon;
        break
      case '03d': 
        url = threed;
        break
      case '03n': 
        url = threen;
        break
      case '04d': 
        url = fourd;
        break
      case '04n': 
        url = fourn;
        break
      case '09d': 
        url = nined;
        break
      case '09n': 
        url = ninen;
        break
      case '10d': 
        url = tend;
        break
      case '10n': 
        url = tenn;
        break
      case '11d': 
        url = elevend;
        break
      case '11n': 
        url = elevenn;
        break
      case '13d': 
        url = thirtd;
        break
      case '13n': 
        url = thirtn;
        break
      case '50d': 
        url = fifd;
        break
      case '50n': 
        url = fifn;
        break
      default: 
        url = oned
    }

    return url
  } 
