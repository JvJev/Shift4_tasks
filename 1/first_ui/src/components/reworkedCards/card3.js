import React from 'react';
import './card3.css';
import grey from './images/grey.jpg';

function Card3() {
  return (
    <div className="card3">
      <h3 className="card-title3">
        Leadership team <p className="date">8.20.15</p>
      </h3>
      <div className="category3">
        <p className="category-text3">News</p>
      </div>

      <img className="banner3" src={grey} alt="Banner Alt Text" />

      <div className="card-content3">
        <h4>News title here</h4>
        <p className="description3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="documentRender3"></div>
      <a href="#" className="read-more3">
        Read More
      </a>
    </div>
  );
}

export default Card3;
