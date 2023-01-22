import { useState } from "react";

export const SearchForm = ({ onSubmit }) => {
  const [input, setInput] = useState("");
  const handleOnClick = (e) => {
    e.preventDefault();
    onSubmit(input);
  };
  return (
    <div className="search-container">
      <form>
        <input
          value={input}
          placeholder={"Generate Robot"}
          type="text"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={(e) => handleOnClick(e)}>Search</button>
      </form>
    </div>
  );
};
