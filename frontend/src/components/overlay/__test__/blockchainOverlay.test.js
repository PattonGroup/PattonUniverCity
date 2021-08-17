import React from 'react';
import BlockchainOverlay from '../blockchainOverlay';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

let getByTestId;

beforeEach(() => {
  const component = render(<BlockchainOverlay />);
  getByTestId = component.getByTestId;
})

afterEach(cleanup);

test("title renders with correct text", () => {
  const titleEl = getByTestId("title-blockchain-overlay");

  expect(titleEl.textContent).toBe("BLOCKCHAIN");
});

test("header renders with correct text", () => {
  const headerEl = getByTestId("header-blockchain-overlay");

  expect(headerEl.textContent).toBe("Introduction education to the world of Blockchain Technology");
});