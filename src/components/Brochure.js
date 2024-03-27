import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import file from '../images/pdf.pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';


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
    // Avanza di 2 pagine per volta, assicurandoti di non superare numPages
    setPageNumber((prevPageNumber) => Math.min(numPages, prevPageNumber + 2));
  }
  const pageStyle = {
    display: 'flex',
    justifyContent: 'center',
    maxHeight: '400px', // Imposta l'altezza massima qui
    overflow: 'hidden',
  };

  return (
    <div>
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        <div style={pageStyle}>
          {/* Renderizza la pagina corrente */}
          <Page pageNumber={pageNumber} />
          {/* Controlla se esiste una pagina successiva e la renderizza */}
          {pageNumber + 1 <= numPages && <Page pageNumber={pageNumber + 1} />}
        </div>
      </Document>
      <div>
        <button onClick={goToPrevPage}>Precedente</button>
        <button onClick={goToNextPage}>Successiva</button>
      </div>
      <p>
        Mostra le pagine {pageNumber} e {pageNumber + 1 <= numPages ? pageNumber + 1 : ''} di {numPages}
      </p>
    </div>
  );
}

export default PdfViewer;