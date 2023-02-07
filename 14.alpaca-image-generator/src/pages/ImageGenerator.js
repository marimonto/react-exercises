import { useState } from "react";
import { alpacaInitialObject, alpacaImageDefault } from "../constants/Alpaca";
import AlpacaImage from "../components/AlpacaImage";
import OptionSelector from "../components/AccessorizeSelector";
import StyleSelector from "../components/StyleOptions";
import { AccessorizeOptions, StyleOptions } from "../constants/Options";
import ColorOptions from "../components/ColorOptions";
import { randomObject } from "../utils/functions";

const ImageGenerator = () => {
  const [accessorizeOption, setAccessorizeOption] = useState("");
  const [alpacaObject, setAlpacaObject] = useState(alpacaInitialObject);
  const [alpacaSetup, setAlpacaSetup] = useState(alpacaImageDefault);

  const getAlpaSetupValues = (value) => {
    const newSetup = { ...alpacaSetup };
    const newObject = { ...alpacaObject };
    setValues(value, newSetup, newObject);
  };

  const onClickRandom = () => {
    const newSetup = structuredClone(alpacaSetup);
    const newObject = structuredClone(alpacaObject);
    AccessorizeOptions.forEach((element) => {
      let value = "";
      if (element === "Background") {
        value = randomObject(element);
      } else {
        value = randomObject(element).value;
      }
      setValues(value, newSetup, newObject, element);
    });
  };

  const setValues = (value, newSetup, newObject, option = accessorizeOption) => {
    newSetup[option.toLowerCase()] = value
      ? `assets/${option.toLowerCase()}/${value}.png`
      : "";
    newObject[option.toLowerCase()] = value;
    setAlpacaObject(newObject);
    setAlpacaSetup(newSetup);
  };
  return (
    <div className="container row">
      <div className="col">
        <AlpacaImage props={alpacaSetup} />
        <button className="feature-button" onClick={onClickRandom}>
          Random
        </button>
      </div>
      <div className="col selector-col">
        <OptionSelector
          activeOption={accessorizeOption}
          handleOnClickAccessorizeOption={(value) =>
            setAccessorizeOption(value)
          }
        />
        {accessorizeOption &&
          (accessorizeOption === "Background" ? (
            <ColorOptions
              handleChangeColor={(value) => getAlpaSetupValues(value)}
              activeOption={alpacaObject.background}
            />
          ) : (
            <StyleSelector
              options={StyleOptions[accessorizeOption]}
              activeOption={alpacaObject[accessorizeOption.toLowerCase()]}
              handleOnClickStyle={(value) => getAlpaSetupValues(value)}
            />
          ))}
      </div>
    </div>
  );
};

export default ImageGenerator;
