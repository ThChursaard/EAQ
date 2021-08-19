import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
const question = [
  'Action that is againist the law',
  'In the open air; Outside a building',
  'Physical activity that keep you fit'
]

const answer = [
  'crime',
  'outdoor',
  'exercise'
]

const qa = shuffle([{q:'Action that is againist the law', a:'crime'},
            {q:'In the open air; Outside a building', a:'outdoor'},
            {q:'Physical activity that keep you fit', a:'exercise'}
])

function shuffle(array) {
  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

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
      <p>Your Score:{score}</p>
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
