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
    <div style={{display:'flex', flexDirection:'row',alignContent:'center', alignItems:'center',justifyContent:'center',gap:'3rem'}}>
      
      <button onClick={goToPrevPage}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA0ElEQVR4nO3YuQrCQBRG4YO+laWouHRu2Gip4kNro41gIeICLpGBKSQkWCjRe/k/mD6HJJM7ARERERGRAvWBLbAHxhg1Am5AEleIKWPMALi+RIS1A0oY0suICHdmiCFt4JKKuAMTDGllRDyAKYY0gXNGxAxDGjkRcwyp50QsMKQGnKxHVIFjKqLItYqby0cqwOGHEUlca4X80aO1jFv+V7h42V1tv64+iK5GFFdDo6sx/t3BKpzf8XDU3eDk58MGw7oxIMxFnV9fjIiIiIgIaU9zyuryINMk1gAAAABJRU5ErkJggg==" /></button>
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        <div style={pageStyle}>
          {/* Renderizza la pagina corrente */}
          <Page pageNumber={pageNumber} />
          {/* Controlla se esiste una pagina successiva e la renderizza */}
          {pageNumber + 1 <= numPages && <Page pageNumber={pageNumber + 1} />}
        </div>
      </Document>
      <button onClick={goToNextPage}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAtElEQVR4nO3YPQrCQBRF4VPpfiytLSyMC1BSGLNVK7GwcQFWgrV/hUYCU4hoIYGY+7gfvAUcZpiZBMzMzMzMOmgIbNKMELYDqjQ3IEPU/iVEOmYG3D/ETBC0+BIzRZBj1FYmQ5BjfpEDx7elb3MuwJiGesD5jxFVmmvTe6YPnCKE1ObAQX1rtamI8HQpItwlS0d0RBnhBVxGiMiBh/rpFOpTdxshojYAVsBa/XeQmZmZmaHlCeC06ncEGe4qAAAAAElFTkSuQmCC" /></button>
    
     
    </div>
  );
}

export default PdfViewer;