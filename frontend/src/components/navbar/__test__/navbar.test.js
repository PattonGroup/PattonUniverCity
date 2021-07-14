import React from 'react';
import Navbar from '../navbar';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

let getByTestId;

beforeEach(() => {
  const component = render(<Navbar />);
  getByTestId = component.getByTestId;
})

afterEach(cleanup);

test("logo title1 renders", () => {
  const logoTitle1El = getByTestId("logo-title1-navbar");

  expect(logoTitle1El.textContent).toBe("PATTON");
});

test("logo title2 renders", () => {
  const logoTitle2El = getByTestId("logo-title2-navbar");

  expect(logoTitle2El.textContent).toBe("UNIVERCITY");
});

test("header renders with Donate link", () => {
  const headerEl = getByTestId("header-donate");

  expect(headerEl.textContent).toBe("Donate");
});