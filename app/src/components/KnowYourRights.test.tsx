import React from 'react';
import {render, screen} from '@testing-library/react';
import KnowYourRights from './KnowYourRights';

describe('Render KYR', () => {
    it('', () => {
        render(<KnowYourRights/>);
        const content = screen.getByText('Miranda Rights');

        expect(content).toBeInTheDocument();
    });
});
