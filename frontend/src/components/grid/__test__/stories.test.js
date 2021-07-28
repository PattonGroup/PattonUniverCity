import React from 'react';
import Stories from '../stories';

import { screen, render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

let getByTestId;

beforeEach(() => {
  const component = render(<Stories />);
  getByTestId = component.getByTestId;
})

afterEach(cleanup);


test("Main header renders the correct text", () => {
  const headerEl = getByTestId("header-main");

  expect(headerEl.textContent).toBe("Patton U Today");
});

test("Main subheader renders the correct text", () => {
  const headerEl = getByTestId("subheader-main");

  expect(headerEl.textContent).toBe("The Latest Stories from Patton U");
});

// Article #1
test("Image must have src={'https://i.imgur.com/cI4fMAt.png'} and alt = 'Sample spotlight'", () => {
  const imageEl = screen.getByTestId("image1");

  expect(imageEl).toHaveAttribute("src", "https://i.imgur.com/cI4fMAt.png");
  expect(imageEl).toHaveAttribute("alt", "Sample spotlight");
});

// Article #2
test("Image must have src={Mascot} and alt = 'Sample spotlight'", () => {
  const imageEl = screen.getByTestId("image2");

  expect(imageEl).toHaveAttribute("src", "mascot.png");
  expect(imageEl).toHaveAttribute("alt", "Sample spotlight");
});

test("Header article2 renders the correct text", () => {
  const headerEl = getByTestId("header-article2");

  expect(headerEl.textContent).toBe("Summer 2021 Course Catalog is now available!");
});

test("Paragraph renders the correct text", () => {
  const paragraphEl = getByTestId("paragraph-article2");

  expect(paragraphEl.textContent).toBe("Choose from a variety of courses for your student to learn this summer, especially if they are not currently active in summer school or some type of summer learning or activity. Sessions last 30 minutes to 1 hour and are in preparation for next school year!");
});

// Article #3
test("Image must have src={Cryptobook} and alt = 'Sample spotlight'", () => {
  const imageEl = screen.getByTestId("image3");

  expect(imageEl).toHaveAttribute("src", "cryptobook.jpg");
  expect(imageEl).toHaveAttribute("alt", "Sample spotlight");
});

test("Header article3 renders the correct text", () => {
  const headerEl = getByTestId("header-article3");

  expect(headerEl.textContent).toBe("Virtual Book Club");
});

test("Paragraph3 renders the correct text", () => {
  const paragraphEl = getByTestId("paragraph-article3");

  expect(paragraphEl.textContent).toBe("This course is geared towards students in grades 3-8 who want to build reading fluency, vocabulary, and reading comprehension. This is an excellent class for students preparing to take standardized tests! One course is approximately one hour. This course meets twice per week.");
});

// Article #4
test("Image must have src={SummerGolf} and alt = 'Sample spotlight'", () => {
  const imageEl = screen.getByTestId("image4");

  expect(imageEl).toHaveAttribute("src", "summerGolf.jpeg");
  expect(imageEl).toHaveAttribute("alt", "Sample spotlight");
});

test("Header article4 renders the correct text", () => {
  const headerEl = getByTestId("header-article4");

  expect(headerEl.textContent).toBe("Golf Lessons for Girls");
});

test("Paragraph4 renders the correct text", () => {
  const paragraphEl = getByTestId("paragraph-article4");

  expect(paragraphEl.textContent).toBe("Golf Lessons for Girls ages 6-12 in Houston! Visit our Course Catalog to learn more and register!");
});

// Article #5
test("Image must have src={PattonReportCover2} and alt = 'Sample spotlight'", () => {
  const imageEl = screen.getByTestId("image5");

  expect(imageEl).toHaveAttribute("src", "cover2.jpeg");
  expect(imageEl).toHaveAttribute("alt", "Sample spotlight");
});

test("Header article5 renders the correct text", () => {
  const headerEl = getByTestId("header-article5");

  expect(headerEl.textContent).toBe("Patton Report");
});

test("Paragraph5 renders the correct text", () => {
  const paragraphEl = getByTestId("paragraph-article5");

  expect(paragraphEl.textContent).toBe("Keep up with Patton U news with our monthly Patton Report. Learn about our Spotlight Student and other upcoming events.");
});

// Article #6
test("Image must have src={Vision} and alt = 'Sample spotlight'", () => {
  const imageEl = screen.getByTestId("image6");

  expect(imageEl).toHaveAttribute("src", "vision.jpeg");
  expect(imageEl).toHaveAttribute("alt", "Sample spotlight");
});