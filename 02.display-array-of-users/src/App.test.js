import { render, screen } from "@testing-library/react";
import App from "./App";

test("should render user names", () => {
  render(<App />);
  const list = screen.getByRole("list");
  const childElements = list.childNodes;
  
  expect(list).toBeInTheDocument();
  expect(childElements.length).toEqual(3);
  expect(childElements[0].textContent).toBe("John Doe");
  expect(childElements[1].textContent).toBe("Jane Doe");
  expect(childElements[2].textContent).toBe("Billy Doe");
});
