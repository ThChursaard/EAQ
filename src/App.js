import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { qa } from "./ques.js";
import SelectQues from "./SelectQues.js";
import { useEffect } from "react";
import socketIOClient from "socket.io-client";
import EndCredit from "./endcredit";
const ENDPOINT = "http://127.0.0.1:4001";

function App() {
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");
  const [score, setScore] = useState([]);
  const [index, setIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const [end, setEnd] = useState(false);
  const [list, setList] = useState([]);
  const [indexin, setIndexin ] = useState(0);
  const [solution,setSolution ] = useState('');
  const [quest, setQuest] = useState('');
  const [trueanw, setTrueAnw] = useState('');
  const [time, setTime] = useState(0);
  const checkAnswer = (myanswer) => {
    if (myanswer == qa[index].a) {
      setScore(score + 1);
    }
    setIndex(index + 1);
  };
  const sendStart = () => {
    if (username == 'admin')
    fetch(`${ENDPOINT}/start`, {
      method: "GET",
    });
  };
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    // Update the document title using the browser API
    socket.on("Start", (data) => {
      console.log("Start");
      console.log(data);
      setReady(true);
    });
    /*socket.on("QuestionList",(data) => {
      console.log("QuestionList");
      console.log(data);
      setList(data);
    });
    socket.on("IndexInterval",(data) => {
      console.log("IndexInterval");
      console.log(data);
      setIndexin(data);
    });
    socket.on("SolutionInterval",(data) => {
      console.log("SolutionInterval");
      console.log(data);
      setSolution(data);
    });*/
    socket.on("questionInterval",(data) => {
      console.log("questionInterval");
      console.log(data);
      setQuest(data);
    });
    socket.on("TrueAnswerInterval",(data) => {
      console.log("TrueAnswerInterval");
      console.log(data);
      setTrueAnw(data);
    });
    socket.on("AllScore",(data) => {
      console.log("AllScore");
      console.log(data);
      setScore(data);
    });
    socket.on("TimeInterval",(data) => {
      console.log("TimeInterval");
      console.log(data);
      setTime(data);
    });
    socket.on("end",(data) => {
      console.log("end");
      console.log(data);
      setEnd(data);
    })
  });
  return (
    <div className="App">
      <form>
        <label>
          Enter your name:
          <input type="text"
          name="name"
          onChange={(e) => setUsername(e.target.value)}
          value={username} />
        </label>
      </form>
      <SelectQues />
      <button onClick={(e) => sendStart()}>Start</button>
      {ready && (
        <div>
          <p1>Your Score:{score}</p1>
          <h1>Your Time:{time%45}</h1>
          <h1>{quest}</h1>
          <h1>The Answer is {qa[index - 1] && qa[index - 1].a} </h1>
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
            <table>
              <tr>
                <th>Username</th>
                <th>Score</th>
              </tr>
              {score.map((e) => (
                <tr>
                  <td>{e.username}</td>
                  <td>{e.score}</td>
                </tr>
              ))}
            </table>
          </form>
          
        </div>
      )}
      {end && <EndCredit />}
    </div>
  );
}

export default App;
