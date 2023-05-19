import { useEffect, useState } from "react";
import "./App.css";
import Chess from "./chess/Chess";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("/api")
      .then((data) => data.json())
      .then((data) => {
        setData(data.msg);
        console.log(data);
      });
  }, []);

  return { data };
}

export default App;
