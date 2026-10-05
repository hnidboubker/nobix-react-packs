import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the frontend home page', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /welcome to frontend/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /get started/i })).toBeInTheDocument();
});
