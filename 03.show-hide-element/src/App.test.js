import { render, screen } from "@testing-library/react";
import App from "./App";
import { act } from "react-dom/test-utils";

test("should render Element Below", () => {
  render(<App />);
  const text = screen.getByText(/Toggle Challenge/i);
  expect(text).toBeInTheDocument();
});

test("should hide Element Below", () => {
  const { rerender } = render(<App />);
  const text = screen.getByText(/Toggle Challenge/i);
  const buttonToHide = screen.getByRole("button", {
    name: /hide element below/i,
  });
  act(() => {
    buttonToHide.click();
  });
  rerender(<App />);
  const buttonToShow = screen.getByRole("button", {
    name: /show element below/i,
  });

  expect(text).not.toBeInTheDocument();
  expect(buttonToShow).toBeInTheDocument();
});
