import { act, fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("should render initial componentes without robots", () => {
  render(<App />);
  const input = screen.getByRole("textbox");
  const searchButton = screen.getByRole("button", {
    name: /search/i,
  });
  const title = screen.getByRole("heading", {
    name: /robot list/i,
  });
  expect(input).toBeInTheDocument();
  expect(searchButton).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});

test("should render robots img when submit values", () => {
  render(<App />);
  const input = screen.getByRole("textbox");
  const searchButton = screen.getByRole("button", {
    name: /search/i,
  });
  const list = screen.getByTestId("list-id")

  fireEvent.change(input, { target: { value: "hello" } });
  act(() => {
    searchButton.click();
  });

  expect(input).toBeInTheDocument();
  expect(searchButton).toBeInTheDocument();
  expect(list).toBeInTheDocument();
});
