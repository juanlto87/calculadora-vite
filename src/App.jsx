import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleButtonClick = (value) => {
    if (value === "C") {
      setInput("");
      setResult(null);
    } else if (value === "=") {
      try {
        // Evalúa la expresión matemática
        setResult(eval(input)); // Nota: eval solo se usa para simplicidad, evita usarlo en proyectos reales
      } catch {
        setResult("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="App">
      <h1>Calculadora</h1>
      <div className="calculator">
        <div className="display">
          <div>{input || "0"}</div>
          {result !== null && <div className="result">= {result}</div>}
        </div>
        <div className="buttons">
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "C", "+"].map((btn) => (
            <button key={btn} onClick={() => handleButtonClick(btn)}>
              {btn}
            </button>
          ))}
          <button className="equals" onClick={() => handleButtonClick("=")}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
