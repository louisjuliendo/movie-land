import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Movie-Land link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Movie-Land/i);
  expect(linkElement).toBeInTheDocument();
});
