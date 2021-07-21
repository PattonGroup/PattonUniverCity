import React from 'react';
import AcademicCTA from '../AcademicCTA';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

let getByTestId;

beforeEach(() => {
  const component = render(<AcademicCTA />);
  getByTestId = component.getByTestId;
})

afterEach(cleanup);

test("header renders with correct text", () => {
  const headerEl = getByTestId("header");

  expect(headerEl.textContent).toBe("Are you looking for a tutor or an Academic Coach?");
});

test("paragraph renders with correct text", () => {
  const paragraphEl = getByTestId("paragraph");

  expect(paragraphEl.textContent).toBe("It’s important that your student finish the first half of the school year strong. Look no further, inbox me and let’s get started!!!");
});

test("button renders with correct text", () => {
  const buttonEl = getByTestId("anchor");

  expect(buttonEl.textContent).toBe("Learn More");
});