import React from 'react';
import MissionStatement from '../missionStatement';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

let getByTestId;

beforeEach(() => {
  const component = render(<MissionStatement />);
  getByTestId = component.getByTestId;
})

afterEach(cleanup);

test("header renders with correct text", () => {
  const headerEl = getByTestId("header-mission");

  expect(headerEl.textContent).toBe("WE BELIEVE IN GREAT IDEAS");
});

test("paragraph line 1 renders with correct text", () => {
  const paragraphEl = getByTestId("paragraph1-mission");

  expect(paragraphEl.textContent).toBe("Our mission is to empower every person and every organization on the planet to achieve more.");
});

test("paragraph line 2 renders with correct text", () => {
  const paragraphEl = getByTestId("paragraph2-mission");

  expect(paragraphEl.textContent).toBe("Our vision is to help people and businesses throughout the world realize their full potential.");
});

test("paragraph line 3 renders with correct text", () => {
  const paragraphEl = getByTestId("paragraph3-mission");

  expect(paragraphEl.textContent).toBe("And to organize the world's information and make it universally accessible and useful. That's why Search makes it easy to discover a broad range of information from a wide variety of sources.");
});

test("should show portfolio button works", () => {
  expect(screen.getByText("View Works").closest("a")).toHaveAttribute("href", "/portfolio");
});  