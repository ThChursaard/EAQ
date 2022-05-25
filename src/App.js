import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { qa } from "./ques.js";
import SelectQues from "./SelectQues.js";
import { useEffect } from "react";
import socketIOClient from "socket.io-client";
import EndCredit from "./endcredit";
const ENDPOINT = "http://212.80.213.130:4001";

function App() {
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");
  const [myScore, setMyScore] = useState(0);
  const [score, setScore] = useState([]);
  const [index, setIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const [end, setEnd] = useState(false);
  const [list, setList] = useState([]);
  const [indexin, setIndexin] = useState(0);
  const [solution, setSolution] = useState("");
  const [quest, setQuest] = useState("");
  const [trueanw, setTrueAnw] = useState("");
  const [time, setTime] = useState(0);

  const checkAnswer = () => {
    const true_a = trueanw;
    const my_a = input;
    console.log(true_a, "!!!", my_a);
    console.log("");
    if (true_a == my_a) {
      console.log("True");
      setMyScore(myScore + 1);
    }
  };

  useEffect(() => {
    if (time % 45 == 30) checkAnswer();
  }, [time]);

  useEffect(() => {
    sendMessage(username, myScore);
  }, [myScore]);

  const sendMessage = (username, score) => {
    fetch(`${ENDPOINT}/update/?username=${username}&score=${score}`, {
      method: "GET",
    });
  };

  const sendStart = () => {
    if (username == "admin")
      fetch(`${ENDPOINT}/start`, {
        method: "GET",
      });
  };
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    // Update the document title using the browser API
    socket.on("Start", (data) => {
      setReady(true);
    });

    socket.on("questionInterval", (data) => {
      setQuest(data);
    });
    socket.on("TrueAnswerInterval", (data) => {
      setTrueAnw(data);
    });
    socket.on("AllScore", (data) => {
      console.log("AllScore");
      console.log(data);
      setScore(data);
    });
    socket.on("TimeInterval", (data) => {
      setTime(data);
    });
    socket.on("end", (data) => {
      setEnd(data);
    });
  });
  return (
    <div className="App">
      <form>
        <label>
          Enter your name:
          <input
            type="text"
            name="name"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </label>
      </form>
      {!ready && <SelectQues />}
      <button onClick={(e) => sendStart()}>Start</button>
      {ready && (
        <div>
          <p1>Your Score:{myScore}</p1>
          <h1>Your Time:{time % 45}</h1>
          <h1>{quest}</h1>
          {time % 45 > 30 && <h1>The Answer is {trueanw} </h1>}
          <form>
            <label></label>
            <input onChange={(e) => setInput(e.target.value)} value={input} />
            <button
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Enter
            </button>
            <table>
              <tr>
                <th>Username</th>
                <th>Score</th>
              </tr>
              {score
                .filter((e) => e.username != "")
                .map((e) => (
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
