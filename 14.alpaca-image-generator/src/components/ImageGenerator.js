import { alpacaImageDefault } from "../constants/Alpaca";
import AlpacaImage from "./AlpacaImage";

const ImageGenerator = () => {
  return (
    <>
      <AlpacaImage props={alpacaImageDefault} />
    </>
  );
};

export default ImageGenerator;
