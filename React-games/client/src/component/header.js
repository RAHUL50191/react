import React from "react";
import { useState } from "react";
var add = function (init) {
  var current = init;
  function added() {
    document.getElementById("action").innerHTML = "Addition on" + current + 1;
    console.log(++current);
  }
  function subed() {
    console.log(--current);
  }
  function result() {
    return current;
  }
  return { added, subed, result };
};

function Header() {
  const [sum, setSum] = useState(1);
  function add() {
    setSum(sum + 1);
  }
  function sub() {
    setSum(sum - 1);
  }
  function reset() {
    setSum(1);
  }
  return (
    <header>
      This is header {sum}
      <button onClick={add}>add</button>
      <button onClick={sub}>sub</button>
      <button onClick={reset}>reset</button>
    </header>
  );
}

export default Header;
