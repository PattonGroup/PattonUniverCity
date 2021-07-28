import React from 'react';
import Team from '../team';
import Person1 from '../../../assets/images/unnamed.png';
import Person2 from '../../../assets/images/unnamed.png';
import Person3 from '../../../assets/images/unnamed.png';
import { screen, render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

let getByTestId;

beforeEach(() => {
  const component = render(<Team />);
  getByTestId = component.getByTestId;
})

afterEach(cleanup);

// Person1
test("Team person1 image must have src={Person1} and alt = ''", () => {
  const imageEl = screen.getByTestId("image1");
  expect(imageEl).toHaveAttribute("src", "unnamed.png");
  expect(imageEl).toHaveAttribute("alt", "");
});

test("Team person1 header1 renders the correct text", () => {
  const headerEl = getByTestId("header1-person1");

  expect(headerEl.textContent).toBe("Ian");
});

test("Team person1 header2 renders the correct text", () => {
  const headerEl = getByTestId("header2-person1");

  expect(headerEl.textContent).toBe("IOS Lead");
});

test("Team person1 paragraph1 renders the correct text", () => {
  const paragraphEl = getByTestId("paragraph1-person1");

  expect(paragraphEl.textContent).toBe("Over 9 years of IOS development in the industry.");
});

test("Team person1 button renders the correct text", () => {
  expect(getByTestId("button-person1")).toHaveTextContent("View details »");
}); 



// Person2
test("Team person2 image must have src={Person2} and alt = ''", () => {
  const imageEl = screen.getByTestId("image2");
  expect(imageEl).toHaveAttribute("src", "unnamed.png");
  expect(imageEl).toHaveAttribute("alt", "");
});

test("Team person2 header1 renders the correct text", () => {
  const headerEl = getByTestId("header1-person2");

  expect(headerEl.textContent).toBe("Dominique");
});

test("Team person2 header2 renders the correct text", () => {
  const headerEl = getByTestId("header2-person2");

  expect(headerEl.textContent).toBe("Project Manager");
});

test("Team person2 paragraph1 renders the correct text", () => {
  const paragraphEl = getByTestId("paragraph1-person2");

  expect(paragraphEl.textContent).toBe("Degree: Masters in Management Information Systems  Experience: G.A. Alumni Software Engineering Program");
});

test("Team person2 button renders the correct text", () => {
  expect(getByTestId("button-person2")).toHaveTextContent("View details »");
}); 

// Person3
test("Team person3 image must have src={Person3} and alt = ''", () => {
  const imageEl = screen.getByTestId("image3");
  expect(imageEl).toHaveAttribute("src", "unnamed.png");
  expect(imageEl).toHaveAttribute("alt", "");
});

test("Team person3 header1 renders the correct text", () => {
  const headerEl = getByTestId("header1-person3");

  expect(headerEl.textContent).toBe("Elvonte");
});

test("Team person3 header2 renders the correct text", () => {
  const headerEl = getByTestId("header2-person3");

  expect(headerEl.textContent).toBe("UX/UI Lead");
});

test("Team person3 paragraph1 renders the correct text", () => {
  const paragraphEl = getByTestId("paragraph1-person3");

  expect(paragraphEl.textContent).toBe("Developed designs for top #10 ranking apps in the IOS app store.");
});

test("Team person3 button renders the correct text", () => {
  expect(getByTestId("button-person3")).toHaveTextContent("View details »");
}); 

