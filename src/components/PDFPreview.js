import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import pdfFile from './assets/Abhishek_Kainthla_-_Frontend_Developer.pdf'; 

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFPreview = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const goToPreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const goToNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <div className="pdf-preview-container">
      <h2 className='blog-header'>_myResume</h2>
      <div className='previewer'>
      <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      </div>
      
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <div>
        <button onClick={goToPreviousPage} disabled={pageNumber <= 1}>
          Previous Page
        </button>
        <button onClick={goToNextPage} disabled={pageNumber >= numPages}>
          Next Page
        </button>
      </div>
    </div>
  );
};

export default PDFPreview;
