import React from 'react';
import FinalCTA from '../finalCTA';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

let getByTestId;

beforeEach(() => {
  const component = render(<FinalCTA />);
  getByTestId = component.getByTestId;
})

afterEach(cleanup);

test("paragraph renders with correct text", () => {
  const paragraphEl = getByTestId("paragraph");

  expect(paragraphEl.textContent).toBe("Want to be a part of the team? We are always looking for new talent.");
});

test("button renders with correct text", () => {
  const buttonEl = getByTestId("button");

  expect(buttonEl.textContent).toBe("Submit Resume");
});