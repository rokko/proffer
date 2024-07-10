import React, { useEffect, useState } from 'react';

const MobileBlocker = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Verifica iniziale
    handleResize();

    // Aggiungi l'event listener per il resize
    window.addEventListener('resize', handleResize);

    // Rimuovi l'event listener al momento della pulizia
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobile) {
    return (
      <div style={{ textAlign: 'center', padding: '20px', fontSize: '18px', color: 'red' }}>
        La visualizzazione di questa pagina è bloccata sui dispositivi mobili.
      </div>
    );
  }

  return children;
};

export default MobileBlocker;