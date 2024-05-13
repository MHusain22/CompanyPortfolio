import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='NavMain'>
        <div className="logo">
            LOGO
        </div>
        <div className="NavList">
            <ul>
      
                <a href="#home"><li>Home</li></a>
                <a href="#about"><li>About</li></a>
                <a href="#services"><li>Services</li></a>
                <a href="#about"><li>Our Work</li></a>
                <a href="#contact"><li>Contacts</li></a>

            </ul>
        </div>
    </div>
  )
}

export default Navbar;