import React from 'react';

function GenerateButton({ onGenerate }) {
  return (
    <button
      style={{
        padding: '10px 20px',
        fontSize: '1rem',
        color: '#fff',
        backgroundColor: '#455073',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
      onClick={onGenerate} // Trigger the provided action when clicked
    >
      Generate
    </button>
  );
}

export default GenerateButton;
