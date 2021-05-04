import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Cat from './cat';
import catService from '../services/catService'

test.only('Calls api when see cat button is clicked', () => {
  render(<Cat />);
  // mocks the api call so you do not call it directly when
  catService.getCatPic = jest.fn().mockResolvedValue(Promise.resolve())

  const button = screen.getByText(/cat pictures/i);
  expect(button).toBeInTheDocument();
 
  act(() => {
    fireEvent.click(button);
  });
  expect( catService.getCatPic).toHaveBeenCalled();
});
