import Featured from "./../../compunent/featured/Featured"
import Navbar from "./../../compunent/navbar/Navbar"
import "./home.scss"
import List from "./../../compunent/list/List"

const home = () => {
  return (
      <div className='home'>
      <Navbar/> 
      <Featured/>
      <List/>
      <List/>
      <List/>
      <List/>
  </div>
    
  );
};

export default home