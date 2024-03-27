import React from 'react';

// Stile di base per la modale
const modalStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#fff',
  padding: '20px',
  zIndex: 1000,
  maxWidth: '90%',
  maxHeight: '90%',
  overflowY: 'auto',
  borderRadius: '5px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
};

const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 1000
};

function Modal({ open, children, onClose }) {
  if (!open) return null;

  return (
    <>
      <div style={overlayStyle} onClick={onClose} />
      <div style={modalStyle}>
        {children}
        <button onClick={onClose} style={{ marginTop: '20px' }}>Chiudi</button>
      </div>
    </>
  );
}

export default Modal;