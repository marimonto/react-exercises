import { useState } from 'react'
function App() {
  const [text, setText] = useState("");

  return (
    <>
      <h3>Disable Button Challenge</h3>
      <input type="text" onChange={(event)=>setText(event.target.value)} />
      <button disabled={!text}>Submit</button>
    </>
  );
}

export default App;
