import { useState } from "react";
import React from "react";

const fruits = ["Apple", "banana", "cherry", "pomograned"];
export default function Fruits() {
  const [fruit, setFruit] = useState(fruits[0]);
  function randomfruit() {
    setFruit(fruits[Math.floor(Math.random() * fruits.length)]);
  }
  return (
    <div>
      {fruit}
      <button onClick={randomfruit}>fruit generator</button>
    </div>
  );
}
