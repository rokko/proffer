import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import file from '../images/pdf.pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import frecciaSinistra from '../images/frecciaSinistra.png'
import frecciaDestra from '../images/frecciaDestra.png'
import './brochure.css'

// Configura il worker di pdf.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PdfViewer() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); // Inizia dalla prima pagina

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function goToPrevPage() {
    // Assicurati che il numero di pagina non vada sotto 1 e che vada indietro di 2 pagine per volta
    setPageNumber((prevPageNumber) => Math.max(1, prevPageNumber - 2));
  }

  function goToNextPage() {
    if(pageNumber < 11){ 
     // Avanza di 2 pagine per volta, assicurandoti di non superare numPages
    setPageNumber((prevPageNumber) => Math.min(numPages, prevPageNumber + 2));
    }
  }
  const pageStyle = {
    display: 'flex',
    justifyContent: 'center',
    maxHeight: '1000px', // Imposta l'altezza massima qui
    overflow: 'hidden',
    borderRadius:'20px',
    
  };

  return (
    <div style={{display:'flex', flexDirection:'row',alignContent:'center', alignItems:'center',justifyContent:'center',gap:'3rem'}}>
      
      <button onClick={goToPrevPage} style={{ backgroundColor: 'transparent',width:'100px'}}><img src={frecciaSinistra} /></button>
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        <div style={pageStyle}>
          {/* Renderizza la pagina corrente */}
          <Page pageNumber={pageNumber} />
          {/* Controlla se esiste una pagina successiva e la renderizza */}
          {pageNumber + 1 <= numPages && <Page pageNumber={pageNumber + 1} />}
        </div>
      </Document>
      <button onClick={goToNextPage} style={{ backgroundColor: 'transparent', width:'100px'}}><img src={frecciaDestra}/></button>
    
     
    </div>
  );
}

export default PdfViewer;