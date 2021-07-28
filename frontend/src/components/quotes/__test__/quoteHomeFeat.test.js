import React from 'react';
import QuoteHomeFeat from '../quoteHomeFeat';

import { screen, render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

let getByTestId;

beforeEach(() => {
  const component = render(<QuoteHomeFeat />);
  getByTestId = component.getByTestId;
})

afterEach(cleanup);

// Person1
test("Image must have src={'https://i.imgur.com/u9ggAMv.jpg'} and alt = 'President Elvonte'", () => {
  const imageEl = screen.getByTestId("image");
  expect(imageEl).toHaveAttribute("src", "https://i.imgur.com/u9ggAMv.jpg");
  expect(imageEl).toHaveAttribute("alt", "President Elvonte");
});

test("Image caption renders the correct text", () => {
  const captionEl = getByTestId("caption");

  expect(captionEl.textContent).toBe("Photo: 4th year Patton U student, Bailey speaks at the campaign rally for Beto O’Rouke during the 2018 Presidential Primaries.");
});

test("Paragraph1 renders the correct text", () => {
  const paragraphEl = getByTestId("paragraph1");

  expect(paragraphEl.textContent).toBe('We cannot predict with certainty the types of jobs that will exist in the future, but we consistently provide students with exposure to 21st century skills with the most authentic, unique, and innovative learning experiences possible."');
});

test("Paragraph2 renders the correct text", () => {
  const paragraphEl = getByTestId("paragraph2");

  expect(paragraphEl.textContent).toBe("Elvonte Patton, Professor of Education");
});

test("Button renders the correct text", () => {
  const buttonEl = getByTestId("button");

  expect(buttonEl.textContent).toBe("→");
});

test("Should show quote link works", () => {
  expect(screen.getByText("Learn more about Professor Elvonte").closest("a")).toHaveAttribute("href", "/");
});