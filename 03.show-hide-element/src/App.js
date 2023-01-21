import { useState } from "react";

function App() {
  const [canShow, setCanShow] = useState(true);

  return (
    <>
      <button onClick={()=> setCanShow(!canShow)}>{canShow ?  'Hide Element Below': 'Show Element Below'}</button>

      {canShow && <div>Toggle Challenge</div>}
    </>
  );
}

export default App;
