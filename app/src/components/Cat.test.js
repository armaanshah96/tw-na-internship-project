/*
 * © 2021 Thoughtworks, Inc.
 */

import React from 'react';
import {fireEvent, render, screen, waitFor, waitForElementToBeRemoved} from '@testing-library/react';
import catService from '../services/catService';
import Cat from './Cat'

/*
    Key concepts: mock, stub, Async code testing

    CHECKPOINT: We discussed 'mocking' an object in Java, can you find the equivalent in this JS code? What library is responsible?
    CHECKPOINT: We discussed 'stubbing' a return value in Java, can you find the equivalent in this JS code? What library is responsible?
    CHECKPOINT: What does 'waitFor' do and why do we need it? (hint: Start by trying to find the documentation for it)
    CHECKPOINT: Can you think of a way to consolidate any redundancies in the tests?

    Topics to go over: jest.fn(), waitFor and waitForElementToBeRemoved, mock/stubbing in js vs. java
 */

jest.mock('../services/catService');

test('button is present on load', () => {
  render(<Cat/>);
  const buttonElement = screen.getByRole('button', {name: /Cat Info!/i})
  expect(buttonElement).toBeInTheDocument();
});

test('when button is clicked, grumpiness level is shown', async () => {
  catService.getGrumpiestCat = jest.fn().mockResolvedValueOnce({
    id: 1,
    name: 'someName',
    color: 'someColor',
    grumpiness: 12
  });
  render(<Cat/>);
  const buttonElement = screen.getByRole('button', {name: /Cat Info!/i})

  fireEvent.click(buttonElement);

  await waitFor(() => {
    const grumpinessLevel = screen.getByText(/Grumpiest cat level is: 12/i)
    expect(grumpinessLevel).toBeInTheDocument()
  });
});

test('when button is clicked, button is removed', async () => {
  catService.getGrumpiestCat = jest.fn().mockResolvedValueOnce({
    id: 1,
    name: 'someName',
    color: 'someColor',
    grumpiness: 12
  });
  render(<Cat/>);
  const buttonElement = screen.getByRole('button', {name: /Cat Info!/i})

  fireEvent.click(buttonElement);

  await waitForElementToBeRemoved(buttonElement)
  expect(buttonElement).not.toBeInTheDocument();
});
