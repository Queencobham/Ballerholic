import React, { useState } from 'react';
import { Link } from 'react-router-dom'
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
            <Link to="/register" className='get-started'>Get started for free</Link>
            <Link to="/login" className='nav-login'>Login</Link>
          </span>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

