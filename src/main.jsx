import "@babel/polyfill";
import React, { useState } from "react";
import { render } from "react-dom";

window.onerror = msg => {
  alert(msg);
};

const Main = () => {
  return (
    <div>
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};
render(<Main />, document.getElementById("app"));
