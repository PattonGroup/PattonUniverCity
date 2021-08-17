import React from 'react';
import BecomeInstructorCTA from '../BecomeInstructorCTA';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

let getByTestId;

beforeEach(() => {
  const component = render(<BecomeInstructorCTA />);
  getByTestId = component.getByTestId;
})

afterEach(cleanup);

test("header renders with correct text", () => {
  const headerEl = getByTestId("header");

  expect(headerEl.textContent).toBe("Become an instructor");
});

test("paragraph renders with correct text", () => {
  const paragraphEl = getByTestId("paragraph");

  expect(paragraphEl.textContent).toBe("There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station whether that is on the deck.");
});

test("button renders with correct text", () => {
  const buttonEl = getByTestId("button");

  expect(buttonEl.textContent).toBe("Apply Here");
});