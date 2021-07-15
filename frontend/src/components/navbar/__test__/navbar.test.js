import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../navbar';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

it("renders logo title", () => {
  const logoTitleEl = document.createElement("logo-title-navbar");

  ReactDom.render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
    logoTitleEl
  );

  ReactDom.unmountComponentAtNode(logoTitleEl);
});