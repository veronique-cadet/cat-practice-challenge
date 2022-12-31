import "./App.css";
import { useState, useEffect } from "react";
import CatContainer from "./CatContainer";

function App() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/cats")
      .then((response) => response.json())
      .then((data) => {
        setCats(data);
      });
  }, []);
  return (
    <div className="App">
      <CatContainer cats={cats} setCats={setCats} />
    </div>
  );
}

export default App;
