import Featured from "../compunent/featured/Featured";
import Navbar from "../compunent/navbar/Navbar"
import "./home.scss"

const home = () => {
  return (
      <div className='home'>
      <Navbar/> 
      <Featured type="movie"/>
  </div>
    
  );
};

export default home