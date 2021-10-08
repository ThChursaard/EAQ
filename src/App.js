import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { qa } from "./ques.js";
import SelectQues from "./SelectQues.js";
import { useEffect } from "react";
const ENDPOINT = "http://127.0.0.1:4001/";

function App() {
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const checkAnswer = (myanswer) => {
    if (myanswer == qa[index].a) {
      setScore(score + 1);
    }
    setIndex(index + 1);
  };
  const sendStart = () => {
    fetch(${ENDPOINT}/start, {
      method: "GET",
    });
  };
  useEffect(() => {
    // Update the document title using the browser API
    socket.on("Start", (data) => {
      console.log("Start");
      console.log(data);
      setReady(true);
    });
  });
  return (
    <div className="App">
      <form>
        <label>
          Enter your name:
          <input type="text" />
        </label>
      </form>
      <SelectQues />
      <button onClick={(e) => sendStart()}>Start</button>
      {ready && (
        <div>
          <p1>Your Score:{score}</p1>
          <p>{qa[index].q}</p>
          <h1>Answer is {qa[index - 1] && qa[index - 1].a} </h1>
          <form>
            <label></label>
            <input onChange={(e) => setInput(e.target.value)} value={input} />
            <button
              onClick={(e) => {
                e.preventDefault();
                checkAnswer(input);
              }}
            >
              Enter
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
