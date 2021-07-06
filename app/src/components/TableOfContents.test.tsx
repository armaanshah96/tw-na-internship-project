import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import TableOfContents from './TableOfContents';
describe('KYR Button', ()=>{
  let button:any;
  beforeEach(()=> {
    render(<TableOfContents/>);
    button=screen.getByText(/Know Your Rights/i)
  });

  test('Assert KYR Button exists', () => {



    expect(button).toBeInTheDocument();

  });

  test('Situation: selecting KYR button and then targeted user button appears and once clicked shows content and no buttons', () => {
    userEvent.click(button)
    const targeted_user=screen.getByText(/Targeted User/i);
    expect(targeted_user).toBeInTheDocument()
    userEvent.click(targeted_user)
    const content= screen.getByText(/Miranda Rights/i);
    expect(content).toBeInTheDocument()
  });

  test('Situation: selecting KYR button and then community member user button appears and once clicked shows content and no buttons', () => {
    userEvent.click(button)
    const communityM_user=screen.getByText(/Community Member User/i);
    expect(communityM_user).toBeInTheDocument()
    userEvent.click(communityM_user)
    const content= screen.getByText(/Miranda Rights/i);
    expect(content).toBeInTheDocument()
  });

})
