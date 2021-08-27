import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import {qa} from './ques.js';

function App() {
  const [input, setInput] = useState('');
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);
  const checkAnswer = (myanswer) => {
    if(myanswer == qa[index].a){
      setScore(score+1);
    }
    setIndex(index+1);
  }
  return (
    <div className="App">
      <div>
      <p1>Your Score:{score}</p1>
      <p>{qa[index].q}</p>
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
