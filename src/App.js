import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <div>
      <p> What is the vocab : strong and well;not sick</p>
      <form>
        <label></label>
        <input onChange = {(e) => setInput(e.target.value)}  value ={input}/>
        <button>Enter</button>
      </form>
    </div>
    </div>
  );
}

export default App;
