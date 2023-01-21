import { useState } from "react";
function App() {
  const [text, setText] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Enter Text"
        value={text}
        aria-label="input"
        onChange={(event) => setText(event.target.value)}
      />
      <p data-testid='text-id'>{text}</p>
    </>
  );
}

export default App;
