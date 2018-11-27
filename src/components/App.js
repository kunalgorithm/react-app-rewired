import React, { useState } from "react";

export default () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="App-header">
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>plus</button>
        <br />
        <button onClick={() => setCount(count - 1)}>minus</button>
      </div>
    </div>
  );
};
