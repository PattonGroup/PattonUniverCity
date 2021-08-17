import React from 'react';
import GradSchoolSuite from '../gradSchoolSuite';

import { screen, render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

let getByTestId;

beforeEach(() => {
  const component = render(<GradSchoolSuite />);
  getByTestId = component.getByTestId;
})

afterEach(cleanup);


test("Main header renders the correct text", () => {
  const headerEl = getByTestId("header-main");

  expect(headerEl.textContent).toBe("Innovative Education");
});

test("Main subtitle renders the correct text", () => {
  const subtitleEl = getByTestId("subtitle-main");

  expect(subtitleEl.textContent).toBe("Preparing students to make meaningful contributions to society as engaged citizens and leaders in a complex world");
});

// #1
test("Image must have src={'https://i.imgur.com/2GC8Qpa.jpg'} and alt = 'Crypto Kids'", () => {
  const imageEl = screen.getByTestId("image1");
  expect(imageEl).toHaveAttribute("src", "https://i.imgur.com/2GC8Qpa.jpg");
  expect(imageEl).toHaveAttribute("alt", "Crypto Kids");
});;

test("First header renders the correct text", () => {
  const headerEl = getByTestId("header1");

  expect(headerEl.textContent).toBe("Crypto for Kids");
});

test("First paragraph renders the correct text", () => {
  const paragraphEl = getByTestId("paragraph1");

  expect(paragraphEl.textContent).toBe("Need Content");
});

test("Should show Tutoring link works", () => {
  expect(screen.getByText("Tutoring >").closest("a")).toHaveAttribute("href", "/");
});

// #2
test("Image must have src={'https://i.imgur.com/jgJX7TV.jpg'} and alt = 'Youth Entrepreneurship'", () => {
  const imageEl = screen.getByTestId("image2");
  expect(imageEl).toHaveAttribute("src", "https://i.imgur.com/jgJX7TV.jpg");
  expect(imageEl).toHaveAttribute("alt", "Youth Entrepreneurship");
});;

test("Second header renders the correct text", () => {
  const headerEl = getByTestId("header2");

  expect(headerEl.textContent).toBe("Youth Entrepreneurship");
});

test("Second paragraph renders the correct text", () => {
  const paragraphEl = getByTestId("paragraph2");

  expect(paragraphEl.textContent).toBe("Need Content");
});

test("Should show College Coaching link works", () => {
  expect(screen.getByText("College Coaching >").closest("a")).toHaveAttribute("href", "/");
});

// #3
test("Image must have src={'https://i.imgur.com/lrRP2aA.jpg'} and alt = 'Yoga'", () => {
  const imageEl = screen.getByTestId("image3");
  expect(imageEl).toHaveAttribute("src", "https://i.imgur.com/lrRP2aA.jpg");
  expect(imageEl).toHaveAttribute("alt", "Yoga");
});;

test("Third header renders the correct text", () => {
  const headerEl = getByTestId("header3");

  expect(headerEl.textContent).toBe("Yoga and Mindfulness");
});

test("Third paragraph renders the correct text", () => {
  const paragraphEl = getByTestId("paragraph3");

  expect(paragraphEl.textContent).toBe("Need Content");
});

test("Should show Mentoring link works", () => {
  expect(screen.getByText("Mentoring >").closest("a")).toHaveAttribute("href", "/");
});