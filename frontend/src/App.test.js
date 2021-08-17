import React from 'react';
import { render } from '@testing-library/react';
 
import App from './App';
 
describe('Load application', () => {
  test('renders App component', () => {
    render(<App />);
  });
});