import { render, screen, fireEvent } from "@testing-library/react";
import Todo from "../Todo";
import { BrowserRouter } from "react-router-dom";

//Integration test
const MockedTodo = () => {
  return (
    <BrowserRouter>
      <Todo></Todo>
    </BrowserRouter>
  );
};

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button");
  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

describe("Todo", () => {
  test("should render same todos in List as added ", () => {
    render(<MockedTodo />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button");
    fireEvent.change(inputElement, { target: { value: "Shopping" } });
    fireEvent.click(buttonElement);
    const divElement = screen.getByText(/Shopping/i);
    expect(divElement).toBeInTheDocument();
  });

  test("should render multiple tasks ", () => {
    render(<MockedTodo />);
    addTask(["Shopping", "Pet Care"]);
    const divElement = screen.getAllByTestId("task-container");
    expect(divElement.length).toBe(2);
  });

  test("task should not have completed class when initially rendered", () => {
    render(<MockedTodo />);
    addTask(["Shopping"]);
    const divElement = screen.getByText(/Shopping/i);
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  test("task should be completed when clicked", () => {
    render(<MockedTodo />);
    addTask(["Shopping"]);
    const divElement = screen.getByText(/Shopping/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active");
  });
});
