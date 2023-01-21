import { render, screen } from "@testing-library/react";
import App from "./App";
import { act } from "react-dom/test-utils";

test("should render initial text for parent", () => {
  render(<App />);
  const initialText = screen.getByText(/I need to be updated from my child/i);
  expect(initialText).toBeInTheDocument();
});

test("should change text for parent when click child button", () => {
  const { rerender } = render(<App />);
  const button = screen.getByRole("button", {
    name: /change parent value/i,
  });
  act(() => {
    button.click();
  });
  rerender(<App />);
  const newText = screen.getByText(/updated!/i);
  expect(newText).toBeInTheDocument();
});
