import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Transpesa</h1>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
