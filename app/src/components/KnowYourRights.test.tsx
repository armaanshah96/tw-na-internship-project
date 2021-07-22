import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import KnowYourRights from './KnowYourRights';
import knowYourRightsService from "../services/knowYourRightsService";



jest.mock('../services/knowYourRightsService');


test('content is display when KYR component is rendered', async () => {
  knowYourRightsService.getKnowYourRightsContent = jest.fn().mockResolvedValueOnce(
  [
  {
    id: 1,
    title: 'someTitle1',
    summary: 'someSummary1',
  },
  {
    id: 2,
    title: 'someTitle2',
    summary: 'someSummary2',
  }
  ]);
  render(<KnowYourRights/>);

  await waitFor(() => {
    const title1 = screen.getByText(/someTitle1/i)
    const summary1 = screen.getByText(/someSummary1/i)
    const title2 = screen.getByText(/someTitle2/i)
    const summary2 = screen.getByText(/someSummary2/i)

    expect(title1).toBeInTheDocument()
    expect(summary1).toBeInTheDocument()
    expect(title2).toBeInTheDocument()
    expect(summary2).toBeInTheDocument()


  });
});




