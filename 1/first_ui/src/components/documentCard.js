import React from 'react';
import './documentCard.css'; // Create a CSS file for styling

function DocumentCard(props) {
  return (
    <div className="document-card">
      <div className="document-card-header">
        <img src={props.imageUrl} alt={props.title} />
        <h3>{props.title}</h3>
      </div>
      <div className="document-card-content">
        <p>{props.description}</p>
        <a href={props.documentUrl} target="_blank" rel="noopener noreferrer">
          View Document
        </a>
      </div>
    </div>
  );
}

export default DocumentCard;
