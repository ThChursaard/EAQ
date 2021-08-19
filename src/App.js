import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
const question = [
  'Action that is againist the law',
  'In the open air; Outside a building',
  'Physical activity that keep you fit'
];
const answer = [
  'crime',
  'outdoor',
  'exercise'
] 
function App() {
  const [input, setInput] = useState('');
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);
  const checkAnswer = (myanswer) => {
    if(myanswer == answer[index]){
      setScore(score+1);
    }
    setIndex(index+1);
  }
  return (
    <div className="App">
      <div>
      <p>Your Score:{score}</p>
      <p>{question[index]}</p>
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
