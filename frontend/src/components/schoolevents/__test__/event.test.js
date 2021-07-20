import React from 'react';
import EventOverview from '../event';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

let getByTestId;

beforeEach(() => {
  const component = render(<EventOverview />);
  getByTestId = component.getByTestId;
})

afterEach(cleanup);

// Spotlight tests
test("Spotlight header renders with the correct text", () => {
  const headerEl = getByTestId("header-spotlight");

  expect(headerEl.textContent).toBe("Spotlight");
});

// test img


test("paragraph1 renders with the correct text", () => {
  const paragraph1El = getByTestId("paragraph1-spotlight");

  expect(paragraph1El.textContent).toBe("Student Name");
});

test("paragraph2 renders with the correct text", () => {
  const paragraph2El = getByTestId("paragraph2-spotlight");

  expect(paragraph2El.textContent).toBe("Student Description");
});

// Online Events tests
test("Online Events renders with the correct text", () => {
  const headerEl = getByTestId("header-online");

  expect(headerEl.textContent).toBe("Online Events");
});

// test img

// test right arrow button carousel

// test left arrow button carousel

// Online Events tests



// Important Dates 
test("Dates header1 renders with correct text", () => {
  const headerEl = getByTestId("header-dates");

  expect(headerEl.textContent).toBe("Important Dates");
});


test("Month header1 renders with correct text", () => {
  const headerEl = getByTestId("header-month1");

  expect(headerEl.textContent).toBe("Jun. - July");
});

test("Day header1 renders with correct text", () => {
  const headerEl = getByTestId("header-day1");

  expect(headerEl.textContent).toBe("28");
});

test("Bar header1 renders with correct text", () => {
  const headerEl = getByTestId("header-bar1");

  expect(headerEl.textContent).toBe("|");
});

test("Should show event1 link works", () => {
  expect(screen.getByText("Summer Phonics Class").closest("a")).toHaveAttribute("href", "/");
}); 


test("Month dates header2 renders with correct text", () => {
  const headerEl = getByTestId("header-month2");

  expect(headerEl.textContent).toBe("Jun. - July");
});

test("Day header2 renders with correct text", () => {
  const headerEl = getByTestId("header-day2");

  expect(headerEl.textContent).toBe("28");
});

test("Bar header2 renders with correct text", () => {
  const headerEl = getByTestId("header-bar2");

  expect(headerEl.textContent).toBe("|");
});

test("Should show event2 link works", () => {
  expect(screen.getByText("Yoga and Mindfulness").closest("a")).toHaveAttribute("href", "/");
}); 