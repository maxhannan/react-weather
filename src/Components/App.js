import { useEffect, useState } from 'react';
import { getWeather } from './magicBoxes/getWeather'
import  Searchbar from './Header'
import Loader from './Loader';
import Main from './Main';




function App() {
  const [data, setData] = useState(null)
  const [pending, setPending] = useState(true)
  const [error, setError] = useState(null)
  const [menuOpen, setMenuOpen] = useState(true)
  const [inpVal, setInpVal] = useState('')

  useEffect(()=>{
    weather('Minneapolis')
  },[])

  const handleSubmit = (e) => {
    e.preventDefault()
    if(inpVal.length > 0){
      weather(inpVal)
      setInpVal('')
      togMenu()
    }
   
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
    setData( await wdata)

    setPending(false)
  }

  
  
  return (
    <div className="App">
      <div className={menuOpen ? "open srchb" : "srchb" }>
        <form onSubmit ={handleSubmit} className = {menuOpen ? "open formSrch " : "formSrch" } >
        <input type = 'text' 
        class = "srchInp" 
        placeholder = 'search'
        value = {inpVal}
        onChange = {(e) => setInpVal(e.target.value)}>
        </input>
        <button type = 'submit'>go</button>
        </form>
      </div>
      {error && <h4>Sorry... No data found, <br/> {error}<br/></h4>}
      {pending && <Loader/>}
      {!pending && !error && <Main  menuOpen = {menuOpen} togMenu = {togMenu} data = {data}/>}  
    </div>
  );
}

export default App;
