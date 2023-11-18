import React from 'react';
// import './documentCardSpecific.css';
// import DocumentCard from './documentCard.js';
// import './documentCardSpecific.css';
import './documentCard.css';

function DocumentCardSpecific(props) {
  return (
    <div className="document-cardS">
      <div className="linesS">
        <div className="document-card-headerS">
          <img
            className="docImageS"
            src="https://cdn-icons-png.flaticon.com/128/4726/4726010.png"
            alt=""
          />
          <h3>File name</h3>
        </div>
      </div>

      
    </div>
  );
}

export default DocumentCardSpecific;

// <DocumentCard
//                 title="Bank benefits form"
//                 imageUrl=""
//                 documentUrl="https://example.com/document1.pdf"
//               />
