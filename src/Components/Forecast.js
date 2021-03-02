import React, { useState } from 'react';
const Forecast = ({data, wSearch}) => {
  const [searchVal, setSearchVal] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    wSearch(searchVal)
    setSearchVal('')
  }
  return ( 
  <div>
    <form onSubmit = { handleSubmit }>
      <input 
      type="text"
      value = {searchVal}
      onChange = {(e) => setSearchVal(e.target.value) }/>
      <input type="submit" value = 'submit' />
    </form>
    <h1>{data.daily.location}</h1>
    <h2>{data.daily.tempF}</h2>
  </div>
  
  );
}
 
export default Forecast;