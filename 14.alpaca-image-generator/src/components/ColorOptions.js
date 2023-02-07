import "../styles/components/_colorOptions.scss";

import { StyleOptions } from "../constants/Options";

const ColorOptions = ({ handleChangeColor, activeOption }) => {
  const onClickChangeColor = (e, color) => {
    e.preventDefault();
    handleChangeColor(color);
  };
  const colors = StyleOptions.Background;
  return (
    <section className="row">
      <div className="col">
        <h2>STYLE</h2>
        {colors.map((color) => (
          <button
            onClick={(e) => onClickChangeColor(e, color)}
            key={color}
            className={`color-button ${activeOption === color && "active"}`}
          >
            <img
              src={`assets/background/${color}.png`}
              className="color-options"
              alt={color}
            ></img>
          </button>
        ))}
      </div>
    </section>
  );
};

export default ColorOptions;
