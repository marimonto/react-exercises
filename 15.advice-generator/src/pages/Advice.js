import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/card/Card";
import DiceButton from "../components/dice-button/DiceButton";

const Advice = () => {
  const [adviceData, setAdviceData] = useState({});

  const getData = () => {
    axios.get("https://api.adviceslip.com/advice").then((res) => {
      setAdviceData(res.data.slip);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  const handleOnClickDice = (e) => {
    e.preventDefault();
    getData();
  };
  return (
    <div className="container">
      <Card adviceData={adviceData} />
      <DiceButton handleOnClickDice={(e) => handleOnClickDice(e)} />
    </div>
  );
};

export default Advice;
