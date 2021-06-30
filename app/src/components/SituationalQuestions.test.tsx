import React from "react";
import {render, screen} from '@testing-library/react';
import SituationalQuestions from "./SituationalQuestions";
import TableOfContents from "./TableOfContents";
import userEvent from "@testing-library/user-event";
test('Check to see if targeted user button is not shown until KYR button is clicked',() =>{
    render(<TableOfContents/>)
    render(<SituationalQuestions/>)
    const KYR=screen.getByText(/"Know Your Rights"/i);
const targeted_user=screen.getByText(/'Targeted User'/i);
    expect(targeted_user).not.toBeInTheDocument();
    userEvent.click(KYR);
    expect(targeted_user).toBeInTheDocument();

});