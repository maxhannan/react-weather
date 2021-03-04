import {BiSearchAlt} from 'react-icons/bi'
import {useState} from 'react'

const Searchbar = ({getWeather}) => {
  const [search, setSearch] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if(search !== ''){
      getWeather(search)
      setSearch('')
    }
  }
  
  return ( 
    <div className="search">
      <button type = 'submit' className = 'searchSubmit'><BiSearchAlt/></button>
      <form onSubmit = {handleSubmit}>
        <input 
        type = 'text' 
        placeholder = 'Search for places...' 
        value = {search} 
        onChange ={(e) => setSearch(e.target.value)}/>
      </form>
    </div>
  );
}
 
export default Searchbar;