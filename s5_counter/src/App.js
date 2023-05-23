import "./App.css";
import { useState } from "react";

const App = () => {
  const [item, setItem] = useState(0);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div className="App">
      <div className="wrapper">
        <h1 className="title">Counter</h1>
        <h1 className="num">{item}</h1>
        <button className="up" onClick={incrementItem}>
          +
        </button>
        <button className="down" onClick={decrementItem}>
          -
        </button>
      </div>
    </div>
  );
};

export default App;
