import React from 'react';
import './App.css';

function App() {

  function onClickBinary() {
    return null;
  }

  function onClickLinear() {
    return null;
  }

  return (
    <div className="App">
      <h1>Search Comparison</h1>
      <textarea className="text-box" cols="30" rows="30"></textarea>
      <div>
        <button>Linear</button>
        <button>Binary</button>
      </div>

    </div>
  );
}

export default App;
