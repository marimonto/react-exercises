import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("should render Disable button", () => {
  render(<App />);
  const button = screen.getByRole("button", {
    name: /submit/i,
  });
  console.log(button.ariaDisabled);
  console.log(button.getAttributeNode("disabled"));
  expect(button).toBeInTheDocument();
  expect(button).toBeDisabled();
});

test("should enable button when input change the value", () => {
  render(<App />);
  const input = screen.getByRole("textbox");
  const button = screen.getByRole("button", {
    name: /submit/i,
  });

  fireEvent.change(input, { target: { value: "new value" } });

  expect(button).toBeEnabled();
});
