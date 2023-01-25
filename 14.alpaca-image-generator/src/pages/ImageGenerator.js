import { useState } from "react";
import { alpacaInitialObject, alpacaImageDefault } from "../constants/Alpaca";
import AlpacaImage from "../components/AlpacaImage";
import OptionSelector from "../components/AccessorizeSelector";
import StyleSelector from "../components/StyleOptions";
import { StyleOptions } from "../constants/Options";
import ColorOptions from "../components/ColorOptions";

const ImageGenerator = () => {
  const [accessorizeOption, setAccessorizeOption] = useState("");
  const [alpacaObject, setAlpacaObject] = useState(alpacaInitialObject);
  const [alpacaSetup, setAlpacaSetup] = useState(alpacaImageDefault);

  const getAlpaSetupValues = (value) => {
    const newSetup = { ...alpacaSetup };
    newSetup[accessorizeOption.toLowerCase()] = value
      ? `assets/${accessorizeOption.toLowerCase()}/${value}.png`
      : "";
    const newObject = { ...alpacaObject };
    newObject[accessorizeOption.toLowerCase()] = value;
    setAlpacaObject(newObject);
    setAlpacaSetup(newSetup);
  };

  return (
    <div className="container row">
      <div className="col">
        <AlpacaImage props={alpacaSetup} />
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
