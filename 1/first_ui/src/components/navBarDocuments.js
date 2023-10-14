import React, { useState } from 'react';
import './navBarDocuments.css';

function NavBarDocuments() {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <nav className="navbar2">
      <ul className="nav-list2">
      <li
            className={`nav-item2 ${activeTab === 'documents2' ? 'active' : ''} `}
            onClick={() => handleTabClick('documents2')}
          >
            Documents
          </li>
      </ul>
    </nav>
  );
}

export default NavBarDocuments;
