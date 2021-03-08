import {BiSearchAlt} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'

const Header = ({togMenu, data, menuOpen}) => {
  const locData = data.location.split(',')
  return ( 
    <div className="locationData">
    <h2>
      <span style ={{fontWeight: '500', fontSize: '25pt', color: '#4d7df6'}}>
        {locData[0]}
      </span>
      , {locData[1]}
    </h2>
    <div className="openBtnContainer" onClick = {togMenu} style = {{fontSize: '20pt'}}>
      {!menuOpen ? <BiSearchAlt/> : <AiOutlineClose/> }
    </div>
  </div>
  );
}
 
export default Header;