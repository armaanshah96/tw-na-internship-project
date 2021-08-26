/*
 * © 2021 Thoughtworks, Inc.
 */

import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import TableOfContents from './TableOfContents';

describe('KYR Button', ()=>{
  let button;
  beforeEach(()=> {
    render(<TableOfContents/>);
    button=screen.getByText(/Know Your Rights/i)
  });

  test('Assert KYR Button exists', () => {
    expect(button).toBeInTheDocument();

  });

  test('Assert KYR Button does not exist after button click', () => {
    userEvent.click(button)
    expect(button).not.toBeInTheDocument();

  });

})
