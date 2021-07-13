import React from 'react';
import Contentbar from '../content';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

//globally define getByTestId
let getByTestId;

// run this before each test (otherwise, define const { getByTestId } = render(<Counter />); at beginning of each test)
beforeEach(() => {
  const component = render(<Contentbar />);
  getByTestId = component.getByTestId;
})

test("header renders with About link", () => {
  const headerEl = getByTestId("header-about");

  expect(headerEl.textContent).toBe("About US");
});

test("header renders with Register link", () => {
  const headerEl = getByTestId("header-register");

  expect(headerEl.textContent).toBe("Register");
});

test("header renders with Donate link", () => {
  const headerEl = getByTestId("header-donate");

  expect(headerEl.textContent).toBe("Donate");
});