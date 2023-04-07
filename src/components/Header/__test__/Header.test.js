import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  //GET BY
  test("should render header element with the text passed as prop to it", () => {
    render(<Header title="Todo" />);
    const headingElement = screen.getByText("Todo");
    expect(headingElement).toBeInTheDocument();
  });

  test("should render header element with the text passed as prop to it", () => {
    render(<Header title="Todo" />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
  });

  test("should render header element with the text passed as prop to it", () => {
    render(<Header title="Todo" />);
    const headingElement = screen.getByTestId("title");
    expect(headingElement).toBeInTheDocument();
  });

  //FIND BY
  test("should render header element with the text passed as prop to it", async () => {
    render(<Header title="Todo" />);
    const headingElement = await screen.findByText("Todo");
    expect(headingElement).toBeInTheDocument();
  });

  //QUERY BY
  test("should render header element with the text passed as prop to it", () => {
    render(<Header title="Todo" />);
    const headingElement = screen.queryByText("todo");
    expect(headingElement).not.toBeInTheDocument();
  });
});
