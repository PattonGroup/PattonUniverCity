import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../navbar';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

test("navbar renders without crashing", () => {
  const headerEl = document.createElement("header-navbar");

  ReactDom.render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
    headerEl
  );

  ReactDom.unmountComponentAtNode(headerEl);
});