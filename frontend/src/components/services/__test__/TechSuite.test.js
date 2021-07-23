import React from 'react';
import TechSuite from '../techSuite';

import { screen, render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

let getByTestId;

beforeEach(() => {
  const component = render(<TechSuite />);
  getByTestId = component.getByTestId;
})

afterEach(cleanup);


test("Main header renders the correct text", () => {
  const headerEl = getByTestId("header-main");

  expect(headerEl.textContent).toBe("The Future of Tech");
});

test("Main subtitle renders the correct text", () => {
  const subtitleEl = getByTestId("subtitle-main");

  expect(subtitleEl.textContent).toBe("Preparing students to make meaningful contributions to society as engaged citizens and leaders in a complex world");
});

// #1
test("Image must have src={'https://i.imgur.com/WNW7C0r.jpg'} and alt = 'Software Development'", () => {
  const imageEl = screen.getByTestId("image1");
  expect(imageEl).toHaveAttribute("src", "https://i.imgur.com/WNW7C0r.jpg");
  expect(imageEl).toHaveAttribute("alt", "Software Development");
});;

test("First header renders the correct text", () => {
  const headerEl = getByTestId("header1");

  expect(headerEl.textContent).toBe("Software Development");
});

test("First paragraph renders the correct text", () => {
  const paragraphEl = getByTestId("paragraph1");

  expect(paragraphEl.textContent).toBe("We develop software developers fostering a learning environment to identify user needs, build programs, test out new software, and make improvements. Using various source debuggers and visual development environments to modify, write, and debug software for client applications. Along with creating documentation client software to create maintainable stand alone services.");
});

test("Should show Software Development link works", () => {
  expect(screen.getByText("Software Development >").closest("a")).toHaveAttribute("href", "/");
});

// #2
test("Image must have src={'https://i.imgur.com/rJG9EA9.jpg'} and alt = 'Blockchain'", () => {
  const imageEl = screen.getByTestId("image2");
  expect(imageEl).toHaveAttribute("src", "https://i.imgur.com/rJG9EA9.jpg");
  expect(imageEl).toHaveAttribute("alt", "Blockchain");
});;

test("Second header renders the correct text", () => {
  const headerEl = getByTestId("header2");

  expect(headerEl.textContent).toBe("Blockchain");
});

test("Second paragraph renders the correct text", () => {
  const paragraphEl = getByTestId("paragraph2");

  expect(paragraphEl.textContent).toBe("Blockchain has recently become synonymous with cryptocurrency, but its applications go far beyond financial transactions. The expansion of blockchain left a few under represented groups. We will shed light on this gap with our research and development focused on the creation of new applications for education and women in the ecosystem.");
});

test("Should show Blockchain link works", () => {
  expect(screen.getByText("Blockchain >").closest("a")).toHaveAttribute("href", "/");
});

// #3
test("Image must have src={'https://i.imgur.com/3wpYwa6.jpg'} and alt = 'Artificial Intelligence'", () => {
  const imageEl = screen.getByTestId("image3");
  expect(imageEl).toHaveAttribute("src", "https://i.imgur.com/3wpYwa6.jpg");
  expect(imageEl).toHaveAttribute("alt", "Artificial Intelligence");
});;

test("Third header renders the correct text", () => {
  const headerEl = getByTestId("header3");

  expect(headerEl.textContent).toBe("Artificial Intelligence");
});

test("Third paragraph renders the correct text", () => {
  const paragraphEl = getByTestId("paragraph3");

  expect(paragraphEl.textContent).toBe("The AI Intelligence program provides a introduction to machine learning, as well as opportunities to explore theoretical and project-based learning in natural language processing and understanding. We will go from foundation to advanced skills in the principles that underlie AI including logic, knowledge representation, and probabilistic models.");
});

test("Should show Artificial Intelligence link works", () => {
  expect(screen.getByText("Artificial Intelligence >").closest("a")).toHaveAttribute("href", "/");
});