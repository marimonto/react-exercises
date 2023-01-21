import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("should change the text value when change value input", () => {
  render(<App />);
  const input = screen.getByLabelText("input");
  const textValue = screen.getByTestId("text-id");

  expect(textValue.textContent).toBe("");
  expect(input).toBeInTheDocument();

  fireEvent.change(input, { target: { value: "new value" } });

  expect(textValue.textContent).toBe("new value");
  expect(input.value).toBe("new value");
});
