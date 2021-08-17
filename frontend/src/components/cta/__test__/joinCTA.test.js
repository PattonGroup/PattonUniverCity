import React from 'react';
import JoinCTA from '../joinCTA';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

let getByTestId;

beforeEach(() => {
  const component = render(<JoinCTA />);
  getByTestId = component.getByTestId;
})

afterEach(cleanup);

test("paragraph renders with correct text", () => {
  const paragraphEl = getByTestId("paragraph");

  expect(paragraphEl.textContent).toBe("We create your future! Let us help you bring your ideas to life.");
});

test("button renders with correct text", () => {
  const buttonEl = getByTestId("button");

  expect(buttonEl.textContent).toBe("Request Quote");
});