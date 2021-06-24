import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Cat from './cat';
import catService from '../services/catService'

test.only('Assert KYR Button exists', () => {
  render(<Cat />);

  const button = screen.getByText(/know your rights/i);
  expect(button).toBeInTheDocument();
})
