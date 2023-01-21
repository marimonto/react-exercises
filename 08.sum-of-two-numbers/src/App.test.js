import { act, fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("should renders intial state", () => {
  render(<App />);
  const total = screen.getByText(/total:/i);
  expect(total).toBeInTheDocument();
});

test("should sum numbers and show total", () => {
  render(<App />);
  const total = screen.getByText(/total:/i);

  const firtNumberInput = screen.getByPlaceholderText(/first number/i);
  const secondNumberInput = screen.getByPlaceholderText(/second number/i);
  const submitButton = screen.getByRole("button", {
    name: /add two numbers/i,
  });
  fireEvent.change(firtNumberInput, { target: { value: "1" } });
  fireEvent.change(secondNumberInput, { target: { value: "2" } });

  act(() => {
    submitButton.click();
  });

  expect(total).toBeInTheDocument();
  expect(total.textContent).toBe("Total: 3");
});
