import React from 'react';
import './card.css'; // Create a CSS file for styling

function Card(props) {
  return (
    <div className="card">
      <img src={props.imageUrl} alt={props.title} />
      <div className="card-content">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
