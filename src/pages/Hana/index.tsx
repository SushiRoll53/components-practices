import React from 'react';
import ReactDOM from 'react-dom';
import HC from './hanaComponent'; 

function App() {
  const handleClick = () => {
    alert('!');
  };

  return (
    <div>
      <HC onClick={handleClick} buttonText="Button" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));