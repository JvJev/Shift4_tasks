import React from 'react';
import './documentCard.css'; // Create a CSS file for styling

function DocumentCard(props) {
  return (
    <div className="document-card">
      <div className="document-card-header">
        <img className='docImage' src={props.imageUrl} alt={props.title} />
        <h3>{props.title}</h3>
      </div>
    </div>
  );
}

export default DocumentCard;
