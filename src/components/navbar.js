import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';

function Navbar() {
  const [active, setActive] = useState(false);

  function handleclick () {
    setActive(!active);
  }

  return (
    <nav className="navbar">
      <h1>Transpesa</h1>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="mailto:mseeflani@proton.me">Contact</a></li>
      </ul>

      <div className='mobilenav'>
        <ul className={`nav-links-mobile ${active? 'active': ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="mailto:mseeflani@proton.me">Contact</a></li>
        </ul>
      </div>

      <div className="mobilenav" onClick={handleclick}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  );
}

export default Navbar;
