import React from 'react';
import Overlay from '../overlay';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

let getByTestId;

beforeEach(() => {
  const component = render(<Overlay />);
  getByTestId = component.getByTestId;
})

afterEach(cleanup);

test("header renders with correct text", () => {
  const headerEl = getByTestId("header-overlay");

  expect(headerEl.textContent).toBe("HOSEA & PATTON DIGITAL ESTATES");
});

test("paragraph renders with correct text", () => {
  const textEl = getByTestId("paragraph-overlay");

  expect(textEl.textContent).toBe("We believe growth and development. We love technology and will continue to move forward towards new development. We work closely with our clients to deliver the best possible solutions for their needs.");
});