import React, { useState } from 'react';

const Header = ({wSearch}) => {
  const [searchVal, setSearchVal] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if(searchVal !== ''){
      wSearch(searchVal)
      setSearchVal('')
    }
  }

  return ( 
    <form onSubmit = { handleSubmit }>
      <input 
      type="text"
      value = {searchVal}
      onChange = {(e) => setSearchVal(e.target.value) }/>
      <input type="submit" value = 'search' />
    </form>
   );
}
 
export default Header;