import { useState } from "react";
import "./App.css";

function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [total, setTotal] = useState(0);

  return (
    <div>
      <h2>Adding Two Numbers</h2>
      <input
        placeholder="First Number"
        type="number"
        value={number1}
        onChange={(event) => setNumber1(+event.target.value)}
      />
      <input
        placeholder="Second Number"
        type="number"
        value={number2}
        onChange={(event) => setNumber2(+event.target.value)}
      />

      <button onClick={() => setTotal(number1 + number2)}>
        Add Two Numbers
      </button>
      <p>Total: {total || ""}</p>
    </div>
  );
}

export default App;
