import { render, screen } from "@testing-library/react";

import List from "./List";

const data = ["html", "css", "js", "react"];

describe("List component", () => {
  it("List renders", () => {
    render(<List items={data} />);

    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getByText("html")).toBeInTheDocument();
  });

  it("List renders without", () => {
    render(<List />);
    expect(screen.queryByRole("list")).toBeNull();
  });

  it("List snapshot", () => {
      const list = render(<List items={data} />);

      expect(list).toMatchSnapshot();
    })
    
    it("List empty snapshot", () => {
        expect(render(<List />)).toMatchSnapshot();
  })
});
