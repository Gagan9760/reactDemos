import React, { useState } from 'react';
import './App.css';
import Btn from './button';

function App() {
  const [value, setValue] = useState(1)
  return (
    <div className="App">
      <h1>{value % 5 === 0 ? `You have reached ${value}` : `Click to start`}</h1>
      <Btn value={value} setValue={setValue} />
    </div>
  );
}

export default App;
