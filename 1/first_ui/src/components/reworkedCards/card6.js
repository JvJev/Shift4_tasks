import React from 'react';
import './card6.css';
import img3 from './images/img3.png';
import black from './images/black.jpg';


function Card6() {
  return (
    <div className="card6">
      <h3 className="card-title6">
        Leadership team<p className="date">8.20.15</p>
      </h3>
      <div className="category6">
        <p className="category-text6">Blog</p>
      </div>

      <img
        className="banner6"
        src={black}
        alt="Banner Alt Text"
      />

      <div className="card-content6">
        <h4>Blog title</h4>
        <p className="description6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="document-card-header6">
        <img className="docImage6" src={img3} alt="" />
      </div>
      <div className="documentRender6"></div>
      <a href="#" className="read-more6">
        Read More
      </a>
    </div>
  );
}

export default Card6;
