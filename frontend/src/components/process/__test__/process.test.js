import React from 'react';
import ProcessItem from '../process';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

let getByTestId;

beforeEach(() => {
  const component = render(<ProcessItem />);
  getByTestId = component.getByTestId;
})

afterEach(cleanup);

test("Main header renders with correct text", () => {
  const headerEl = getByTestId("header-main");

  expect(headerEl.textContent).toBe("The Process");
});

test("Header renders with concept", () => {
  const headerEl = getByTestId("header-concept");

  expect(headerEl.textContent).toBe("01. Concept");
});

test("Header renders with prototyping", () => {
  const headerEl = getByTestId("header-prototyping");

  expect(headerEl.textContent).toBe("02. Prototyping");
});

test("Header renders with design", () => {
  const headerEl = getByTestId("header-design");

  expect(headerEl.textContent).toBe("03. Design");
});

test("Header renders with development", () => {
  const headerEl = getByTestId("header-development");

  expect(headerEl.textContent).toBe("04. Development");
});