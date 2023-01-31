import { StyleOptions } from "../constants/Options";

export const randomObject = (property) => {
  const result =
    StyleOptions[property][Math.floor(Math.random() * StyleOptions[property].length)];

  return result;
};
