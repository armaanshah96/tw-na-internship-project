import React from 'react';
import { fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import catService from   '../services/catService';
import Cat from './Cat'

jest.mock('../services/catService');

test('button is present on load', () => {
  render(<Cat />);
  const buttonElement = screen.getByRole('button', {name: /Cat Info!/i})
  expect(buttonElement).toBeInTheDocument();
});

test('when button is clicked, grumpiness level is shown', async () => {
 catService.getGrumpiestCat = jest.fn().mockResolvedValueOnce({id: 1, name: "string", color: 'string', grumpiness: 12});
  render(<Cat />);
  const buttonElement = screen.getByRole('button', {name: /Cat Info!/i})
  
  fireEvent.click(buttonElement);
  
  await waitFor(()=> {
    const grumpinessLevel = screen.getByText(/Grumpiest cat level is: 12/i)
    expect(grumpinessLevel).toBeInTheDocument()
   }); 
});

test('when button is clicked, button is removed', async () => {
  catService.getGrumpiestCat = jest.fn().mockResolvedValueOnce({id: 1, name: "string", color: 'string', grumpiness: 12});
   render(<Cat />);
   const buttonElement = screen.getByRole('button', {name: /Cat Info!/i})
   
   fireEvent.click(buttonElement);

  await waitForElementToBeRemoved(buttonElement)
  expect(buttonElement).not.toBeInTheDocument();
 });
