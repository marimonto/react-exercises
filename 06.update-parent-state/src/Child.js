import "./App.css";

function Child({setValue}) {
  
  return (
    <>
      <div>Child</div>
      <button onClick={() => setValue("Updated!")}>Change Parent Value</button>
    </>
  );
}

export default Child;
