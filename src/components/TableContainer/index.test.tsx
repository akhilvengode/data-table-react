import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TableContainer from ".";

describe("TableContainer", () => {
  it("should render TableContainer successfully", () => {
    render(
      <TableContainer>
        <div>Testing table container</div>
      </TableContainer>
    );
    expect(screen.getByText("Testing table container")).toBeInTheDocument();
  });
});
