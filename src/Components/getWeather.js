export const getWeather = async (search) => {
  // openWeather Key
  const apiKey = '070d5b93cd86e7baa71b2a5bf2276467'
  const nameData = await getName(search)
  const coords = nameData.geometry.location
  const name = nameData.formatted_address
  const oneCallURL = `
  https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lng}&appid=${apiKey}`
  
  const response = await fetch(oneCallURL, { mode: 'cors' })
  const data = await response.json()
  return weatherFormatter(data, name)
}

const getName = async (search) => {
  // Google Key
  const apiKey = 'AIzaSyAzvI9cu1Zk8OegSCLn8Yv0BTagQSWDMFQ'
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${search}&key=${apiKey}`
  
  const response = await fetch(url, { mode: 'cors' })
  const data = await response.json()

  return (data.results[0])
}

const weatherFormatter = (info, placeName) => {
  const current = info.current

  const sevenDayForecast = info.daily.map(day => {
    const dayinfo = {
      day: weekDay[getDay(day.dt).getDay()],
      highC: toCelsius(day.temp.max),
      lowC: toCelsius(day.temp.min),
      highF: toFahrenheit(day.temp.max),
      lowF: toFahrenheit(day.temp.min),
      descrip: day.weather[0].description,
      iconSrc: getIconURL(day.weather[0].icon, false)
    }
    return dayinfo
  })

  const weatherData = {
    daily: {
      location: placeName,
      time: getDay(current.dt),
      timeStr: getDay(current.dt).toLocaleTimeString(),
      day: weekDay[getDay(current.dt).getDay()],
      tempC: toCelsius(current.temp),
      tempF: toFahrenheit(current.temp),
      wind: current.wind_speed,
      windDir: current.wind_deg,
      sunrise: getDay(current.sunrise).toLocaleTimeString(),
      humidity: current.humidity,
      descrip: current.weather[0].description,
      iconSrc: getIconURL(current.weather[0].icon)
    },
    sevenDay: [...sevenDayForecast]
  }
  return weatherData
}

// HELPER FUNCTIONS
const weekDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const toCelsius = (K) => Math.floor(K - 273.15)
const toFahrenheit = (K) => Math.floor(toCelsius(K) * (9 / 5) + 32)
const getDay = (date) => new Date(date * 1000) // converts unix timestamp to date
const getIconURL = (iconId, large = true) => { // retrieves appropiate icon url based on weather code from api
  let url
  if (large) {
    url = `http://openweathermap.org/img/wn/${iconId}@4x.png`
  } else {
    url = `http://openweathermap.org/img/wn/${iconId}@2x.png`
  }
  return url
}