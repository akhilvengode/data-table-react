import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Button from ".";

describe("Button", () => {
  it("should render button", () => {
    render(<Button>Click</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent(/click/i);
    expect(button).toHaveAttribute("type", "button");
  });

  it("should render a submit button when type is passed as 'submit'", () => {
    render(<Button type="submit">Test</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent(/test/i);
    expect(button).toHaveAttribute("type", "submit");
  });

  it("should invoke the passed function to onClick prop to Button", () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>Test</Button>);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
