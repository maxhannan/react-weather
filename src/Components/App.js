import { useEffect, useState } from 'react';
import { getWeather } from './magicBoxes/getWeather'
import  Searchbar from './Header'
import Loader from './Loader';
import Main from './Main';




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
    weather('Scottsdale')
  },[])

  return (
    <div className="App">
      <Searchbar getWeather = {weather}/>
      {error && <h4>Sorry... No data found, {error}</h4>}
      {pending && <Loader/>}
      {!pending && !error && <Main  data = {data}/>}  
    </div>
  );
}

export default App;
