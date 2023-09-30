import React from 'react';
import './navBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="icon">WILL BE ICON</li>
        <li className="nav-item"><a href="/">Quick Launch</a></li>
        <li className="nav-item"><a href="/about">Directory</a></li>
        <li className="nav-item"><a href="/services">Departments</a></li>
        <li className="nav-item"><a href="/contact">Library</a></li>
        <li className="search">WILL BE SEARCH BAR</li>
      </ul>
    </nav>
  );
}

export default NavBar;
