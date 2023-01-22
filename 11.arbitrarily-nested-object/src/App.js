import React, { useState } from "react";

import "./App.css";
import { DisplayNested } from "./components/DisplayNested";
function App() {
  const [nestedObjected] = useState({
    taxi: "a car licensed to transport passengers in return for payment of a fare",
    food: {
      sushi:
        "a traditional Japanese dish of prepared rice accompanied by seafood and vegetables",
      apple: {
        Honeycrisp:
          "an apple cultivar developed at the MAES Horticultural Research Center",
        Fuji: "an apple cultivar developed by growers at Tohoku Research Station",
        Test: {
          level: "more nested level"
        }
      },
    },
  });

  return (
    <div style={{ margin: "auto", width: "70%", paddingTop: 40 }}>
      <DisplayNested nestedObjected={nestedObjected} />
    </div>
  );
}

export default App;
