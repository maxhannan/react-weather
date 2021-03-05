import {RiLoader2Fill} from 'react-icons/ri'
import styled from 'styled-components'
const Loader = () => {
  return ( 
    <div className="loadContainer">
      <Spinner/>
    </div>
  );
}
 
export default Loader;
const Spinner = styled(RiLoader2Fill)`
  animation: spin 1s linear 0s infinite;
  transform-origin: center;
`;