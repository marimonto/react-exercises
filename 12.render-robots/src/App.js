import "./App.css";
import { RobotList } from "./components/RobotList";
import { SearchForm } from "./components/SearchForm";
import { useState } from "react";

function App() {
  const [robotList, setRobotList] = useState([]);

  const handleOnSubmit = (value) => {
    if (value) {
      setRobotList([...robotList, value]);
    }
  };
  return (
    <div className="app-container">
      <SearchForm onSubmit={handleOnSubmit} />
      <RobotList robotList={robotList} />
    </div>
  );
}

export default App;
