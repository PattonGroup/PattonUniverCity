import React from 'react';
import NewsletterCTA from '../NewsletterCTA';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

test("header renders with correct text", () => {
  const { getByTestId } = render(<NewsletterCTA />);
  const headerEl = getByTestId("header");

  expect(headerEl.textContent).toBe("Newsletter");
});

test("paragraph renders with correct text", () => {
  const { getByTestId } = render(<NewsletterCTA />);
  const paragraphEl = getByTestId("paragraph");

  expect(paragraphEl.textContent).toBe("Subscribe and get the latest news and useful tips, advice and best offer.");
});

test("first name field updates on change", () => {
  const { getByPlaceholderText } = render(<NewsletterCTA />);
  const input = getByPlaceholderText("Enter your email");

  fireEvent.change(input, { target: {value: "testuser@email.com"}})
  expect(input.value).toBe("testuser@email.com")
});

test("button renders with correct text", () => {
  const { getByTestId } = render(<NewsletterCTA />)
  const buttonEl = getByTestId("button");

  expect(buttonEl.textContent).toBe("SUBSCRIBE");
});