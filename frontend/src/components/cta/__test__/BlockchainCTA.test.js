import React from 'react';
import BlockchainCTA from '../blockchainCTA';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

let getByTestId;

beforeEach(() => {
  const component = render(<BlockchainCTA />);
  getByTestId = component.getByTestId;
})

afterEach(cleanup);

test("button renders with correct text", () => {
  const buttonEl = getByTestId("button");

  expect(buttonEl.textContent).toBe("Join the Network");
});