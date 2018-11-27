import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="App-header">
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>plus</button>
        <br />
        <button onClick={() => setCount(count - 1)}>minus</button>

        <style jsx>
          {`
            .App {
              text-align: center;
            }

            .App-header {
              background-color: white;
              min-height: 100vh;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              font-size: calc(10px + 2vmin);
              color: black;
            }
          `}
        </style>

        <style jsx global>{`
          button {
            -webkit-appearance: none;
            -webkit-box-align: center;
            align-items: center;
            color: rgb(255, 255, 255);
            display: inline-flex;
            width: 200px;
            height: 40px;
            font-size: 12px;
            -webkit-box-pack: center;
            justify-content: center;
            text-transform: uppercase;
            cursor: pointer;
            text-align: center;
            user-select: none;
            font-weight: 100;
            position: relative;
            white-space: nowrap;
            line-height: 0;
            background: rgb(0, 0, 0);
            padding: 0px 25px;
            outline: none;
            border-width: 1px;
            border-style: solid;
            border-color: rgb(0, 0, 0);
            border-image: initial;
            overflow: hidden;
            transition: border 0.2s ease 0s, background 0.2s ease 0s,
              color 0.2s ease-out 0s;
            border-radius: 5px;
            text-decoration: none;
          }
          button:hover {
            color: rgb(0, 0, 0);
            border-width: 1px;
            border-style: solid;
            border-color: rgb(0, 0, 0);
            border-image: initial;
            background: rgb(255, 255, 255);
          }
        `}</style>
      </div>
    </div>
  );
}
export default App;
