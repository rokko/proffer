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

 

  return children;
};

export default MobileBlocker;