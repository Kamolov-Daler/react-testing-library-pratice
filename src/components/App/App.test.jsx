import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App component", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("renders learn react link", () => {
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getByText("Find course:")).toBeInTheDocument();
  });

  it("typing in searchbox works", () => {
    expect(screen.queryByDisplayValue(/React/)).toBeNull();

    userEvent.type(screen.getByRole("textbox"), "React");

    expect(screen.getByText(/React/)).toBeInTheDocument();
  });

  it("search filter is working", () => {
    expect(screen.getByText("Vue")).toBeInTheDocument();
    expect(screen.getByText("JS")).toBeInTheDocument();

    userEvent.type(screen.getByRole("textbox"), "JS");

    expect(screen.queryByDisplayValue(/Vue/)).toBeNull();
    expect(screen.getByText("JS")).toBeInTheDocument();
  });
});
