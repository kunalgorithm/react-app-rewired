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
      </div>
    </div>
  );
}
export default App;
