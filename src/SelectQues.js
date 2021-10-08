import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { qa } from "./ques.js";
import { shuffle } from "./ques.js";
const ENDPOINT = "http://127.0.0.1:4001";

const a = qa.map((c) => c.a);
const sendQuestion = (question, answer) => {
  fetch(`${ENDPOINT}/addquestion/?question=${question}&answer=${answer}`, { method: "GET" });
};
function SelectQues() {
  const [question, setQuestion] = useState(shuffle(a));
  return (
    <div>
      {qa.map((c) => (
        <button onClick = {(e) => sendQuestion(c.q,c.a)} > {c.a} </button> 
      ))}
    </div>
  );
}

export default SelectQues;
