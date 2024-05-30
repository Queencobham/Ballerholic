import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='container'>
      <nav>
        <img src={logo} alt="ballerholic" />
         
          <div className="hamburger" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes className='fa-times' /> : <GiHamburgerMenu className='fa-bars'/>}
          </div>

        <ul className= {isMenuOpen ? "nav-menu open" : "nav-menu"}>
          <span className="nav-links">
          <li><a href="#">Navigation</a></li>
          <li><a href="#">Navigation</a></li>
          <li><a href="#">Navigation</a></li>
          <li><a href="#">Navigation</a></li>
          <li><a href="#">Navigation</a></li>
          <li><a href="#">Navigation</a></li>
          </span>

          <span className="btn">
            <a href="#" className='get-started'>Get started for free</a>
            <a href="#" className='nav-login'>Login</a>
          </span>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

