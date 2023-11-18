import React from 'react';
import './card4.css';
import img1 from './images/img1.png';
import bankView from './images/bankView.png';
import black from './images/black.jpg';


function Card4() {
  return (
    <div className="card4">
      <h3 className="card-title4">
        Retail Admin <p className="date">8.20.15</p>
      </h3>
      <div className="category4">
        <p className="category-text4">News</p>
      </div>

      <img className="banner4" src={img1} alt="Banner Alt Text" />

      <div className="card-content4">
        <h4>Retail Details Issue 1</h4>
      </div>
      <div className="document-card-header4">
        <img className="docImage4" src={bankView} alt="" />
      </div>
      <div className="documentRender4"></div>
      <a href="#" className="read-more4">
        Read More
      </a>
    </div>
  );
}

export default Card4;
