import React, { useState } from 'react';
import './navBarDocuments.css';

function NavBarDocuments() {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
      <li
            className={`nav-item ${activeTab === 'documents' ? 'active' : ''} `}
            onClick={() => handleTabClick('documents')}
          >
            Documents
          </li>
      </ul>
    </nav>
  );
}

export default NavBarDocuments;
