import { act, render, screen } from "@testing-library/react";
import App from "./App";

test("should renders initial state", () => {
  render(<App />);
  const name = screen.getByTestId("name-id");
  const website = screen.getByTestId("website-id");
  const email = screen.getByTestId("email-id");
  const phone = screen.getByTestId("phone-id");

  expect(name.textContent).toContain("(Need to populate name here)");
  expect(website.textContent).toContain("(Need to populate website here)");
  expect(email.textContent).toContain("(Need to populate email here)");
  expect(phone.textContent).toContain("(Need to populate phone here)");
});

test("should renders data after fetch data", async () => {
  const fakeUserData = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
  };
  const fetchSpy = jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeUserData),
    })
  );
  jest.useFakeTimers();
  const { rerender } = render(<App />);

  await act(async () => {
    jest.runAllTimers();
    await Promise.resolve();
  });

  expect(fetchSpy).toHaveBeenCalledWith(
    "https://jsonplaceholder.typicode.com/users/1"
  );

  rerender(<App />);
  const name = screen.getByTestId("name-id");
  const website = screen.getByTestId("website-id");
  const email = screen.getByTestId("email-id");
  const phone = screen.getByTestId("phone-id");

  expect(name.textContent).toContain(fakeUserData.name);
  expect(website.textContent).toContain(fakeUserData.website);
  expect(email.textContent).toContain(fakeUserData.email);
  expect(phone.textContent).toContain(fakeUserData.phone);
});
