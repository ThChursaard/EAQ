import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import {qa} from './ques.js';
import { shuffle } from './ques.js';

const a = qa.map(c => c.a)
function SelectQues() {
    const [question, setQuestion] = useState(shuffle(a));
  return (
    <div>
        <button>{question[0]}</button>
        <button>{question[1]}</button>
        <button>{question[2]}</button>
        <button>{question[3]}</button>
        <button>{question[4]}</button>
    </div>
  )
}

export default SelectQues;
