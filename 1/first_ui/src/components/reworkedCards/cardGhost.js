import React from 'react';
import './cardGhost.css';
import img4 from './images/img4.png';

function CardGhost() {
  return (
    <div className="ghost">
      <h3 className="ghost-title">Leadership team</h3>
      <div className="ghost-category">
        <p className="ghost-category-text">Blog</p>
      </div>

      <img
        className="ghost-banner"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhGjkKoGoxsmA4JAGcnjposFkwFLeLLNkDqg&usqp=CAU"
        alt="Banner Alt Text"
      />

      <div className="ghost-content">
        <h4>Blog title</h4>
        <p className="ghost-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="ghost-document-card-header">
        <img className="ghost-docImage" src={img4} alt="" />
      </div>
      <div className="ghost-documentRender"></div>
      <a href="#" className="ghost-read-more">
        Read More
      </a>
    </div>
  );
}

export default CardGhost;
