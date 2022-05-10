import { ArrowDropDown, Notifications, Search } from "@material-ui/icons"
import { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar Scrolled" : "navbar"}>
       <div className="container">
           <div className="left">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png" alt="netfilx"/>
              <span>Homepage</span>
              <span>Tv Show</span>
              <span>Treding</span>
              <span>My list</span>
            </div>
              <div className="right">
                <Search className="icon"/>
                <span>KID</span>
                <Notifications className="icon"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Luna_messi_01.jpg" alt="profile"/>
                  <div className="profiles">
                    <span>Setting</span>
                    <span>Logout</span>
                  </div>
                <ArrowDropDown className="icon"/>
            </div>
           </div>
       </div>
  )
}

export default Navbar