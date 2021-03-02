import Forecast from "./Forecast";
import { useEffect, useState } from 'react';
import { getWeather } from './getWeather'
function App() {
  const [data, setData] = useState(null)
  const [pending, setPending] = useState(true)
  const [error, setError] = useState(null)
  
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
      {error && <h1>Sorry... No data found</h1>}
      {pending && <h2>Loading...</h2>}
      {!pending && !error && <Forecast data = {data} wSearch = {weather} />}
    </div>
  );
}

export default App;
