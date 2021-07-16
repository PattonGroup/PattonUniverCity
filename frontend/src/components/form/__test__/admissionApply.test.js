import React from 'react';
import { render, fireEvent, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AdmissionApply from '../admissionApply';

afterEach(cleanup);

test("form renders without crashing", () => {
  render(<AdmissionApply />);
});

test("header1 renders with correct text", () => {
  const { getByTestId } = render(<AdmissionApply />);
  const headerEl = getByTestId("header-admission-form");

  expect(headerEl.textContent).toBe("Stay in Touch");
});

test("admission button renders with correct text", () => {
  const { getByTestId } = render(<AdmissionApply />);
  const buttonEl = getByTestId("button-admission-form");

  expect(buttonEl.textContent).toBe("Apply Now");
});

test("first name field updates on change", () => {
  const { getByPlaceholderText } = render(<AdmissionApply />);
  const input = getByPlaceholderText("First Name");

  fireEvent.change(input, { target: {value: "John"}})
  expect(input.value).toBe("John")
});

const setup = (placeholder, value) => {
  const { getByPlaceholderText } = render(<AdmissionApply />);
  const input = getByPlaceholderText(placeholder);
  
  fireEvent.change(input, { target: {value: value}})
  return input.value;
}

test("last name field updates on change", () => {
  const value = setup("Last Name", "Smith");
  expect(value).toBe("Smith");
});

test("phone number field updates on change", () => {
  const value = setup("Phone Number", "800-555-1234");
  expect(value).toBe("800-555-1234");
});

test("email address field updates on change", () => {
  const value = setup("Email Address", "JSmith@email.com");
  expect(value).toBe("JSmith@email.com");
});

