import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";


import Search from "./Search";

const onChange = jest.fn();

describe("Search component", () => {
  it("render", () => {
    render(
      <Search value="" onChange={onChange}>
        Find:
      </Search>
    );

    expect(screen.getByText(/Find/i)).toBeInTheDocument();
  });
  it("render without children", () => {
    render(<Search value="" onChange={onChange}></Search>);

    expect(screen.getByText(/search/i)).toBeInTheDocument();
  });

  it("renders without placeholder", () => {
    render(<Search value="" onChange={onChange} />);
    expect(screen.getByPlaceholderText(/search.../i)).toBeInTheDocument();
  });

  it("custom placeholder works correctly", () => {
    render(<Search value="" placeholder="find post" onChange={onChange} />);
    
    expect(screen.getByPlaceholderText(/find post/i)).toBeInTheDocument();
  });
  
  it("onChange works", () => {
    render(<Search value="" placeholder="find post" onChange={onChange} />);
    
    userEvent.type(screen.getByRole('textbox'), 'React');

    expect(onChange).toHaveBeenCalledTimes(5);
  })

  it("dinamic styles works", () => {
    render(<Search value={"abc"} onChange={onChange} />)
  
    expect(screen.getByRole("textbox")).toHaveClass('input');
    expect(screen.getByRole("textbox")).toHaveClass('filled');
    expect(screen.getByText("Search")).toHaveClass('label');
  })

  it("Search snapshot", () => {
    const search = render(<Search value="" onChange={onChange}>Find:</Search>)
  
    expect(search).toMatchSnapshot();
  })
  
});
