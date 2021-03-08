import {BiSearchAlt} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {useState} from 'react'

const SearchMenu = ({menuOpen, handleSubmit}) => {
  const [inpVal, setInpVal] = useState('');

  const handleSearch = (e) => {
    e.preventDefault()
    
    if(inpVal.length > 0){ 
      handleSubmit(inpVal) 
      setInpVal('')
    }
  }
  
  return ( 
    <div className={menuOpen ? "open srchb" : "srchb" }>
      <form onSubmit ={handleSearch} className = {menuOpen ? "open formSrch " : "formSrch" } >
        <button 
        type = 'button' 
        onClick = {() => setInpVal('')}>
          <AiOutlineClose/>
        </button>   
        <input type = 'text' 
        class = "srchInp" 
        placeholder = 'Search For Places...'
        value = {inpVal}
        onChange = {(e) => setInpVal(e.target.value)}>
        </input>
        <button type = 'submit'><BiSearchAlt/></button>
      </form>
    </div>
  );
}
 
export default SearchMenu;