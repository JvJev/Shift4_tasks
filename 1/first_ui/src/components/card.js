import React from 'react';
import './card.css'; // Create a CSS file for styling

function Card(props) {
  return (
    <div className="card">
            <h3>{props.title}</h3>
            <div className='catDiv'>
        <p className='categoryStyle'> {props.category}</p>
      </div>

            <img className='banner' src={props.banner} alt={props.banner}/>

      
      <img src={props.imageUrl} alt={props.title} />
      <div className="card-content">
        <p>{props.description}</p>
        <a href={props.readMoreUrl} target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
}

export default Card;
