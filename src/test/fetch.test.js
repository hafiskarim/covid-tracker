import React from "react";
import { render, cleanup, act } from "@testing-library/react";
import CardWorldWide from "../components/Card/Card";
import { unmountComponentAtNode } from "react-dom";

let container = null;
beforeEach(() => {
  container = document.getElementsByClassName("header-text__sub-title");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Rendered Component ", async () => {
  act(() => {
    render(<CardWorldWide />);
  });
  expect(container.textContent).toBe("Covid-19 Testing");
});
