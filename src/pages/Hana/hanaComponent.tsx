import React from 'react';

function HC({ onClick , buttonText }) {
  return (
    <button
      style={{
        fontSize: '24px',
        padding: '20px',
        borderRadius: '10px',
        backgroundColor: 'blue',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
}

export default HC;
