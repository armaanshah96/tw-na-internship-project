import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import TableOfContents from './TableOfContents';

test('Assert KYR Button exists', () => {
  render(<TableOfContents />);

  const button = screen.getByText(/know your rights/i);
  expect(button).toBeInTheDocument();

});

test('checks if content is present after clicking KYR button and that the button is no longer present', () => {
  render(<TableOfContents />);
  const button = screen.getByText(/know your rights/i);
  userEvent.click(button)

  const content = screen.getByText(/miranda rights/i);
  expect(content).toBeInTheDocument();
  expect(button).not.toBeInTheDocument();


});
