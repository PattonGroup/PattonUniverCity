import React from 'react';
import Contentbar from '../content';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

let getByTestId;

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