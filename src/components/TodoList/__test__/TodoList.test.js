import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TodoList from "../TodoList";

const MockedTodoList = ({ todos, setTodos }) => {
  return (
    <BrowserRouter>
      <TodoList todos={todos} setTodos={setTodos} />
    </BrowserRouter>
  );
};

const mockedSetTodos = jest.fn();

describe("TodoList", () => {
  test("should display the given todo", () => {
    render(
      <MockedTodoList
        todos={[{ task: "shopping" }]}
        setTodos={mockedSetTodos}
      />
    );
    const divElement = screen.getByText("shopping");
    expect(divElement).toBeInTheDocument();
  });

  test("should display the given list of todos", () => {
    render(
      <MockedTodoList
        todos={[{ task: "shopping" }, { task: "pet care" }]}
        setTodos={mockedSetTodos}
      />
    );
    const divElement = screen.getAllByTestId("task-container");
    expect(divElement.length).toBe(2);
  });
});
