import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

const mockedSetTodos = jest.fn();

describe("AddInput", () => {
  test("should render input element", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
    const inputElement = screen.getByPlaceholderText("Add a new task here...");
    expect(inputElement).toBeInTheDocument();
  });

  test("should be able to type into input", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
    const inputElement = screen.getByPlaceholderText("Add a new task here...");
    fireEvent.change(inputElement, { target: { value: "Shopping" } });
    expect(inputElement.value).toBe("Shopping");
  });

  test("should have empty input after add button clicked", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
    const inputElement = screen.getByPlaceholderText("Add a new task here...");
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    fireEvent.change(inputElement, { target: { value: "Shopping" } });
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe("");
  });
});
