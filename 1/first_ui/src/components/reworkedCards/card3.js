import React from 'react';
import './card3.css';

function Card3() {
  return (
    <div className="card3">
      <h3 className="card-title3">Card Title</h3>
      <div className="category3">
        <p className="category-text3">Category</p>
      </div>

      <img
        className="banner3"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhGjkKoGoxsmA4JAGcnjposFkwFLeLLNkDqg&usqp=CAU"
        alt="Banner Alt Text"
      />

      <div className="card-content3">
        <h4>Title here</h4>
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
