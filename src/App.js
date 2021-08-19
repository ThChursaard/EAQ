import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [score, setScore] = useState(0);
  const checkAnswer = (answer) => {
    if(answer == 'healthy'){
      setScore(score+1);
    }
  }
  return (
    <div className="App">
      <div>
      <p>Your Score:{score}</p>
      <p> What is the vocab : strong and well;not sick</p>
      <form>
        <label></label>
        <input onChange = {(e) => setInput(e.target.value)}  value ={input}/>
        <button onClick = {(e) => {e.preventDefault()
           checkAnswer(input)}}>Enter</button>
      </form>
    </div>
    </div>
  );
}

export default App;
