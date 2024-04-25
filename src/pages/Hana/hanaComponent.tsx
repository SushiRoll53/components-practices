import React from 'react';

type HCProps = {
  onClick?: () => void; // Define the type for the onClick event handler
  buttonText: string;        // Define the type for the text prop
};

const HC: React.FC<HCProps> = ({ onClick , buttonText }) => {
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
    >
      {buttonText}
    </button>
  );
}

export default HC;
