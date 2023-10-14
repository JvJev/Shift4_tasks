import React from 'react';
// import './documentCardSpecific.css';
// import DocumentCard from './documentCard.js';
// import './documentCardSpecific.css';
import './documentCard.css';

function DocumentCardSpecific(props) {
  return (
    <div className="document-card">
      <div className="lines">
        <div className="documentRender document-card-header">
          <img
            className="docImage"
            src="data:image/png;base64,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"
            alt=""
          />
          <h3>File name</h3>
        </div>
      </div>

      <div className="lines1">
        <div className="documentRender document-card-header">
          <img
            className="docImage"
            src="data:image/png;base64,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"
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
