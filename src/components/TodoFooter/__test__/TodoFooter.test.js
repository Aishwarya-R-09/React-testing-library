import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

describe("TodoFooter", () => {
  test("should render the correct amount of incomplete tasks", async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={4} />);
    const paragraphElement = screen.getByText(/4 tasks left/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  test("should render task singular when incomplete task is one", async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeInTheDocument();
  });
});

//Different types of assertion
test("should render task singular when incomplete task is one", async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText("1 task left");
  expect(paragraphElement).toBeTruthy();
});

test("should render task singular when incomplete task is one", async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText("1 task left");
  expect(paragraphElement).toBeVisible();
});

test("should render task singular when incomplete task is one", async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText("1 task left");
  expect(paragraphElement).toContainHTML("p");
});

test("should render task singular when incomplete task is one", async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByTestId("para");
  expect(paragraphElement).toHaveTextContent("1 task left");
});

test("should render task singular when incomplete task is one", async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByTestId("para");
  expect(paragraphElement).not.toBeFalsy();
});

test("should render task singular when incomplete task is one", async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByTestId("para");
  expect(paragraphElement.textContent).toBe("1 task left");
});
