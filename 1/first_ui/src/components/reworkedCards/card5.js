import React from 'react';
import './card5.css';
import img2 from './images/img2.png';


function Card5() {
  return (
    <div className="card5">
      <h3 className="card-title5">Rob Roberts</h3>
      <div className="category5">
        <p className="category-text5">Chirp</p>
      </div>

      <img
        className="banner5"
        src={img2}
        alt="Banner Alt Text"
      />

      <div className="card-content5">
        <p className='huge'>"</p>
        <p className="description5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.           Lorem ipsum dolor sit amet, consectetur adipiscing elit.

        </p>
      </div>
    </div>
  );
}

export default Card5;
