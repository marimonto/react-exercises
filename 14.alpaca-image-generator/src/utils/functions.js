import { StyleOptions } from "../constants/Options";
import * as htmlToImage from 'html-to-image';

export const randomObject = (property) => {
  const result =
    StyleOptions[property][Math.floor(Math.random() * StyleOptions[property].length)];
  return result;
};

export const downloadImage = async () => {
  const element = document.getElementById("image");
  const dataUrl = await htmlToImage.toPng(element);

  // download image
  const link = document.createElement('a');
  link.download = "Alpaca.png";
  link.href = dataUrl;
  link.click();
}
