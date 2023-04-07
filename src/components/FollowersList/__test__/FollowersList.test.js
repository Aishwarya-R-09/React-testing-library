import { render, screen } from "@testing-library/react";
import FollowersList from "../FollowersList";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

jest.mock("axios");

const MockedFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("FollowersList", () => {
  test("should get the follower ", async () => {
    const mockResponse = {
      data: {
        results: [
          {
            name: {
              first: "Ajay",
              last: "R",
            },
            picture: {
              large: "https://randomuser.me/api/portraits/men/8.jpg",
            },
            login: {
              username: "ajay_r",
            },
          },
        ],
      },
    };
    axios.get.mockResolvedValue(mockResponse);
    render(<MockedFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
  });

  test("should get multiple followers items", async () => {
    const mockResponse = {
      data: {
        results: [
          {
            name: {
              first: "Ajay",
              last: "R",
            },
            picture: {
              large: "https://randomuser.me/api/portraits/men/8.jpg",
            },
            login: {
              username: "ajay_r",
            },
          },
          {
            name: {
              first: "Akila",
              last: "R",
            },
            picture: {
              large: "https://randomuser.me/api/portraits/men/8.jpg",
            },
            login: {
              username: "akila_r",
            },
          },
        ],
      },
    };
    axios.get.mockResolvedValue(mockResponse);
    render(<MockedFollowersList />);
    const followerDivElements = await screen.findAllByTestId(/follower-item/i);
    expect(followerDivElements.length).toBe(2);
  });
});
