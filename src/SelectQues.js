import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { qa } from "./ques.js";
import { shuffle } from "./ques.js";
const ENDPOINT = "http://212.80.213.130:4001";
const a = qa.map((c) => c.a);
function SelectQues() {
  const [questionCount, setQuestionCount] = useState(0);
  const [question, setQuestion] = useState(shuffle(a));

  const sendQuestion = (question, answer) => {
    if (questionCount < 10) {
      fetch(`${ENDPOINT}/addquestion/?question=${question}&answer=${answer}`, {
        method: "GET",
      });
      setQuestionCount(questionCount + 1);
    }
  };
  return (
    <div>
      <div>Vocab Stock:{questionCount}/10</div>
      {shuffle(qa)
        .filter((c, i) => i <= 5)
        .map((c) => (
          <button onClick={(e) => sendQuestion(c.q, c.a)}> {c.a} </button>
        ))}
    </div>
  );
}

export default SelectQues;
