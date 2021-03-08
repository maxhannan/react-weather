import { useEffect, useState } from 'react';
import { getWeather } from './magicBoxes/getWeather'
import Loader from './Loader';
import Main from './Main';
import SearchMenu from './SearchMenu';

function App() {
  const [data, setData] = useState(null)
  const [pending, setPending] = useState(true)
  const [error, setError] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(()=>{
    weather('Minneapolis')
  },[])

  const handleSubmit = (inpVal) => {
    weather(inpVal)
    togMenu()
  }

  const togMenu = () => {
    setMenuOpen(!menuOpen)
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
    setData(wdata)
    setPending(false)
  }

  return (
    <div className="App">
      <SearchMenu menuOpen = {menuOpen} handleSubmit = {handleSubmit} />
      {error && <h4>Sorry... No data found, <br/> {error}<br/></h4>}
      {pending && <Loader/>}
      {!pending && !error && <Main  menuOpen = {menuOpen} togMenu = {togMenu} data = {data}/>}  
    </div>
  );
}

export default App;
