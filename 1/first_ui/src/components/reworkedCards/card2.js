import React from 'react';
import './card2.css';

function Card2() {
  return (
    <div className="card2">
      <h3 className="card-title2">Leadership Team</h3>
      <div className="category2">
        <p className="category-text2">News</p>
      </div>

      <img
        className="banner2"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhGjkKoGoxsmA4JAGcnjposFkwFLeLLNkDqg&usqp=CAU"
        alt="Banner Alt Text"
      />

      <div className="card-content2">
        <h4>News Title</h4>
        <p className="description2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      
      <div className="documentRender2"></div>
      <a href="#" className="read-more2">
        Read More
      </a>
    </div>
  );
}

export default Card2;
