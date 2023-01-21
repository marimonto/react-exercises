import { act, render, screen } from "@testing-library/react";
import App from "./App";

test("should render initial value counter", () => {
  render(<App />);
  const counter = screen.getByRole("heading", {
    name: /counter: 0/i,
  });
  expect(counter).toBeInTheDocument();
});

test("should increment counter when click Increment button", () => {
  render(<App />);
  const counter = screen.getByRole("heading", {
    name: /counter: 0/i,
  });
  const incrementButton = screen.getByRole("button", {
    name: /increment/i,
  });
  act(() => incrementButton.click());
  
  expect(counter.textContent).toBe('Counter: 1')
});

test("should decrement counter when click Decrement button", () => {
  render(<App />);
  const counter = screen.getByRole("heading", {
    name: /counter: 0/i,
  });
  const decrementButton = screen.getByRole("button", {
    name: /decrement/i,
  });
  act(() => decrementButton.click());
  
  expect(counter.textContent).toBe('Counter: -1')
});
