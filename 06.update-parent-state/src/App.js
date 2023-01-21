import { useState } from "react";
import "./App.css";
import Child from "./Child";

function App() {
  const [value, setValue] = useState("I need to be updated from my child");

  return (
    <>
      <h3>Update Parent State Challenge (Using Callback)</h3>
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>

      <div className="wrapper">
        <Child />
      </div>
    </>
  );
}

export default App;
