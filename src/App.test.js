import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const MockedAppComponent = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

test("renders learn react link", () => {
  render(<MockedAppComponent />);
  const headingElement = screen.getByText(/Todo/i);
  expect(headingElement).toBeInTheDocument();
});
