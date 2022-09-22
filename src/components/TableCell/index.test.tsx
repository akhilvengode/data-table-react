import React from "react";
import "@testing-library/jest-dom/extend-expect";
import TableCell from ".";
import { screen, render } from "@testing-library/react";

describe("TableCell", () => {
  it("should render td by default", () => {
    render(<TableCell>Test cell</TableCell>);
    const cell = screen.getByRole("cell");
    expect(cell).toHaveTextContent(/test cell/i);
  });

  it("should render th when we pass isHead true", () => {
    render(<TableCell isHead>Test cell</TableCell>);
    const cell = screen.getByRole("columnheader");
    expect(cell).toHaveTextContent(/test cell/i);
  });
});
