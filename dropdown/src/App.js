import './styles/App.css';
import React, { useState, useEffect } from 'react';
import Dropdown from './components/Dropdown.js';


function App() {
  

    const handleMenuOne = () => {
      console.log('clicked One');
    }
  
    const handleMenuTwo = () => {
      console.log('clicked Two');
    }

  

  return (
    <div className="App">
        <Dropdown 
          trigger={<button>Dropdown</button>}
          menu={[
            <button onClick={handleMenuOne}>Menu 1</button>,
            <button onClick={handleMenuTwo}>Menu 2</button>,
          ]}
        />
    </div>
  );
}

export default App;
