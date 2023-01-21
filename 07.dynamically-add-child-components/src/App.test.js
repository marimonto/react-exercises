import { render, screen } from "@testing-library/react";
import App from "./App";

test("should renders parent and child", () => {
  render(<App />);
  const parentText = screen.getByText(/Parent Component/i);
  const childrenText = screen.getByText(/This is children content/i);
  expect(parentText).toBeInTheDocument();
  expect(childrenText).toBeInTheDocument();

});
