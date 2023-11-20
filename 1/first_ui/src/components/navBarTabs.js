import React, { useState } from 'react';
import './navBarTabs.css';

function NavBarTabs() {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li
          className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => handleTabClick('home')}
        >
          All
        </li>
        <li
          className={`nav-item ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => handleTabClick('about')}
        >
          News
        </li>
        <li
          className={`nav-item ${activeTab === 'services' ? 'active' : ''}`}
          onClick={() => handleTabClick('services')}
        >
          Blog
        </li>
        <li
          className={`nav-item ${activeTab === 'contact' ? 'active' : ''}`}
          onClick={() => handleTabClick('contact')}
        >
          Chirps
        </li>
        <li
          className={`nav-item ${activeTab === 'docs' ? 'active' : ''}`}
          onClick={() => handleTabClick('docs')}
        >
          Docs
        </li>
        <li
          className={`nav-item ${
            activeTab === 'retail_details' ? 'active' : ''
          }`}
          onClick={() => handleTabClick('retail_details')}
        >
          Retail Details
        </li>
      </ul>
    </nav>
  );
}

export default NavBarTabs;
