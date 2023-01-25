import { useState } from "react";
import { alpacaImageDefault } from "../constants/Alpaca";
import AlpacaImage from "../components/AlpacaImage";
import OptionSelector from "../components/AccessorizeSelector";
import StyleSelector from "../components/StyleOptions";
import { StyleOptions } from "../constants/Options";
import ColorOptions from "../components/ColorOptions";

const ImageGenerator = () => {
  const [accessorizeOption, setAccessorizeOption] = useState("");
  const [alpacaSetup, setAlpacaSetup] = useState(alpacaImageDefault);

  const getAlpaSetupValues = (value) => {
    console.log(accessorizeOption, value);
    const newObject = { ...alpacaSetup };
    newObject[accessorizeOption.toLowerCase()] = value
      ? `assets/${accessorizeOption.toLowerCase()}/${value}.png`
      : "";
    console.log(newObject);
    setAlpacaSetup(newObject);
  };

  return (
    <div className="container row">
      <div className="col">
        <AlpacaImage props={alpacaSetup} />
      </div>
      <div className="col">
        <OptionSelector
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
              handleOnClickStyle={(value) => getAlpaSetupValues(value)}
            />
          ))}
      </div>
    </div>
  );
};

export default ImageGenerator;