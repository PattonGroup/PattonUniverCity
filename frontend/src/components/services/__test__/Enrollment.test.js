import React from 'react';
import Enrollment from '../enrollment';

import { screen, render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

let getByTestId;

beforeEach(() => {
  const component = render(<Enrollment />);
  getByTestId = component.getByTestId;
})

afterEach(cleanup);

// test section data-setbg

// Main
test("Main header renders the correct text", () => {
  const headerEl = getByTestId("header-main");

  expect(headerEl.textContent).toBe("Enrollment");
});

test("Main paragraph renders the correct text", () => {
  const paragraphEl = getByTestId("paragraph-main");

  expect(paragraphEl.textContent).toBe("We invite you to join our learning community where we work collaboratively with each other to prepare for a space in the future for our youth to thrive.");
});

// #1
test("First span renders the correct text", () => {
  const spanEl = getByTestId("span1");

  expect(spanEl.textContent).toBe("1");
});

test("First header renders the correct text", () => {
  const headerEl = getByTestId("header1");

  expect(headerEl.textContent).toBe("Interested");
});

test("First paragraph renders the correct text", () => {
  const paragraphEl = getByTestId("paragraph1");

  expect(paragraphEl.textContent).toBe("Browse our site or read our Patton Report for the latest updated on what we are doing.");
});

// #2
test("Second span renders the correct text", () => {
  const spanEl = getByTestId("span2");

  expect(spanEl.textContent).toBe("2");
});

test("Second header renders the correct text", () => {
  const headerEl = getByTestId("header2");

  expect(headerEl.textContent).toBe("Consulting");
});

test("Second paragraph renders the correct text", () => {
  const paragraphEl = getByTestId("paragraph2");

  expect(paragraphEl.textContent).toBe("Need more information that you cannot find on our website or social media pages? Feel free to direct message us or email us at hr@pattonunivercity.com");
});

// #3
test("Third span renders the correct text", () => {
  const spanEl = getByTestId("span3");

  expect(spanEl.textContent).toBe("3");
});

test("Third header renders the correct text", () => {
  const headerEl = getByTestId("header3");

  expect(headerEl.textContent).toBe("Register");
});

test("Third paragraph renders the correct text", () => {
  const paragraphEl = getByTestId("paragraph3");

  expect(paragraphEl.textContent).toBe("Express your interest through filling out a simply application form found at the bottom of the page.");
});

test("Image must have src={'https://i.imgur.com/JfS1edn.jpg'} and alt = ''", () => {
  const imageEl = screen.getByTestId("image");
  expect(imageEl).toHaveAttribute("src", "https://i.imgur.com/JfS1edn.jpg");
  expect(imageEl).toHaveAttribute("alt", "");
});