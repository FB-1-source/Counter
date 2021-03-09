import React, { useState } from "react";
import Header from "./Header";

let num = 0;

function App() {
  const [count, setCount] = useState(0);

  function Increase() {
    setCount(count + 1);
  }
  function Decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <Header />
      <h1>{count}</h1>
      <button onClick={Increase}>+</button>
      <button onClick={Decrease}>-</button>
    </div>
  );
}

export default App;
