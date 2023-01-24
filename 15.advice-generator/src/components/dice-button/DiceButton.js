import "./DiceButton.css";

const DiceButton = ({handleOnClickDice}) => {
  return (
    <button className="dice-button" onClick={handleOnClickDice}>
      <img src="images/icon-dice.svg" alt="dice" />
    </button>
  );
};
export default DiceButton;
