import React from 'react';
import LogoSlider from '../logoSlider';

import { screen, render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

let getByTestId;

beforeEach(() => {
  const component = render(<LogoSlider />);
  getByTestId = component.getByTestId;
})

afterEach(cleanup);

test("Image must have src={SocialRing} and alt = 'Social Ring'", () => {
  const imageEl = screen.getByTestId("image1");
  expect(imageEl).toHaveAttribute("src", "socialringlogo.png");
  expect(imageEl).toHaveAttribute("alt", "Social Ring");
});

test("Image must have src={PinkLemonade} and alt = 'PinkLemonade'", () => {
  const imageEl = screen.getByTestId("image2");
  expect(imageEl).toHaveAttribute("src", "pinklemonade.jpeg");
  expect(imageEl).toHaveAttribute("alt", "PinkLemonade");
});

test("Image must have src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png' and alt = ''", () => {
  const imageEl = screen.getByTestId("image3");
  expect(imageEl).toHaveAttribute("src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png");
  expect(imageEl).toHaveAttribute("alt", "");
});

test("Image must have src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png' and alt = ''", () => {
  const imageEl = screen.getByTestId("image4");
  expect(imageEl).toHaveAttribute("src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png");
  expect(imageEl).toHaveAttribute("alt", "");
});

test("Image must have src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png' and alt = ''", () => {
  const imageEl = screen.getByTestId("image5");
  expect(imageEl).toHaveAttribute("src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png");
  expect(imageEl).toHaveAttribute("alt", "");
});

test("Image must have src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png' and alt = ''", () => {
  const imageEl = screen.getByTestId("image6");
  expect(imageEl).toHaveAttribute("src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png");
  expect(imageEl).toHaveAttribute("alt", "");
});

test("Image must have src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png' and alt = ''", () => {
  const imageEl = screen.getByTestId("image7");
  expect(imageEl).toHaveAttribute("src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png");
  expect(imageEl).toHaveAttribute("alt", "");
});

test("Image must have src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png' and alt = ''", () => {
  const imageEl = screen.getByTestId("image8");
  expect(imageEl).toHaveAttribute("src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png");
  expect(imageEl).toHaveAttribute("alt", "");
});

test("Image must have src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png' and alt = ''", () => {
  const imageEl = screen.getByTestId("image9");
  expect(imageEl).toHaveAttribute("src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png");
  expect(imageEl).toHaveAttribute("alt", "");
});

test("Image must have src={SocialRing} and alt = 'Social Ring'", () => {
  const imageEl = screen.getByTestId("image10");
  expect(imageEl).toHaveAttribute("src", "socialringlogo.png");
  expect(imageEl).toHaveAttribute("alt", "Social Ring");
});

test("Image must have src={PinkLemonade} and alt = 'PinkLemonade'", () => {
  const imageEl = screen.getByTestId("image11");
  expect(imageEl).toHaveAttribute("src", "pinklemonade.jpeg");
  expect(imageEl).toHaveAttribute("alt", "PinkLemonade");
});

test("Image must have src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png' and alt = ''", () => {
  const imageEl = screen.getByTestId("image12");
  expect(imageEl).toHaveAttribute("src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png");
  expect(imageEl).toHaveAttribute("alt", "");
});

test("Image must have src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png' and alt = ''", () => {
  const imageEl = screen.getByTestId("image13");
  expect(imageEl).toHaveAttribute("src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png");
  expect(imageEl).toHaveAttribute("alt", "");
});

test("Image must have src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png' and alt = ''", () => {
  const imageEl = screen.getByTestId("image14");
  expect(imageEl).toHaveAttribute("src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png");
  expect(imageEl).toHaveAttribute("alt", "");
});

test("Image must have src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png' and alt = ''", () => {
  const imageEl = screen.getByTestId("image15");
  expect(imageEl).toHaveAttribute("src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png");
  expect(imageEl).toHaveAttribute("alt", "");
});

test("Image must have src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png' and alt = ''", () => {
  const imageEl = screen.getByTestId("image16");
  expect(imageEl).toHaveAttribute("src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png");
  expect(imageEl).toHaveAttribute("alt", "");
});