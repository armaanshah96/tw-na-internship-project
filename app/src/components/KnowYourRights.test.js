/*
 * © 2021 Thoughtworks, Inc.
 */

import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
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
                additionalInfoList: ['a']
            },
            {
                id: 2,
                title: 'someTitle2',
                summary: 'someSummary2',
                additionalInfoList: ['a', 'b']
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
test('additional info is called', async () => {
    knowYourRightsService.getKnowYourRightsContent = jest.fn().mockResolvedValueOnce(
        [
            {
                id: 1,
                title: 'someTitle1',
                summary: 'someSummary1',
                additionalInfoList: [{
                    id: 1,
                    text: 'a'
                }]
            },
            {
                id: 2,
                title: 'someTitle2',
                summary: 'someSummary2',
                additionalInfoList: [{
                    id: 2,
                    text: 'b'
                },
                {
                    id: 3,
                    text: 'c'
                }]
            }
        ]);
    render(<KnowYourRights/>);

    await waitFor(() => {

        const addInfoLi = screen.getAllByTestId("addInfo")

        expect(addInfoLi).toHaveLength(3)

    });

});




