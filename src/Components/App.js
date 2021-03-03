import { useEffect, useState } from 'react';
import { getWeather } from './getWeather'

import Forecast from "./Forecast";
import Header from "./Header";

function App() {
  const [data, setData] = useState(null)
  const [pending, setPending] = useState(true)
  const [error, setError] = useState(null)
  const [isCelsius, setisCelsius] = useState(false)

  const togCelsius = () => {
    setisCelsius(!isCelsius)
  }
  
  const weather = async (search) => {
    setPending(true)
    setError(null)
    let wdata
    try {
      wdata = await getWeather(search)
    } catch (error) {
      setError(error.message)
      setPending(false)
      return
    }
    setData( await wdata)

    setPending(false)
  }

  useEffect(()=>{
    weather('Minneapolis')
  },[])

  return (
    <div className="App">
      <Header wSearch = {weather} togCelsius = {togCelsius}/>
      <main>
        {error && <h4>Sorry... No data found, {error}</h4>}
        {pending && <h2>Loading...</h2>}
        {!pending && !error && <Forecast data = {data} isCelsius = {isCelsius}/>}
      </main>
      
    </div>
  );
}

export default App;
