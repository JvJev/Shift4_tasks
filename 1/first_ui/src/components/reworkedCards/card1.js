import React from 'react';
import './card1.css';

function Card1() {
  return (
    <div className="card">
      <h3 className="card-title">
        Leadership Team
        <p className="date">8.20.15</p>
      </h3>
      <div className="category">
        <p className="category-text">Blog</p>
      </div>
      <img
        className="banner"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhGjkKoGoxsmA4JAGcnjposFkwFLeLLNkDqg&usqp=CAU"
        alt="Banner Alt Text"
      />

      <div className="card-content">
        <h4>Blog Title</h4>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="document-card-header">
        <img
          className="imageInsideCard"
          src="https://cdn-icons-png.flaticon.com/128/4726/4726010.png"
          alt=""
        />
        <div className="filenamePPTX">
          <h4 className="specificDocName">Presentation Name</h4>
          <span>filename.ppt</span>
        </div>
      </div>
      <div className="document-card-header">
        <img
          className="imageInsideCard"
          src="https://cdn-icons-png.flaticon.com/128/4726/4726010.png"
          alt=""
        />
        <div className="filenamePPTX">
          <h4 className="specificDocName">Presentation Name</h4>
          <span>filename.ppt</span>
        </div>
      </div>

      <div className="documentRender"></div>

      <a href="#" className="read-more">
        Read More
      </a>
    </div>
  );
}

export default Card1;
