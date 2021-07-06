import React from "react";
import {render, screen} from '@testing-library/react';
import SituationalQuestions from "./SituationalQuestions";
import userEvent from "@testing-library/user-event";
let targeted_User:any;
let communityM_User:any;
beforeEach(()=> {
    render(<SituationalQuestions/>);
    targeted_User=screen.getByText(/Targeted User/i)
    communityM_User=screen.getByText(/Community Member User/i)

});
test('Situation: selecting KYR button and then targeted user button appears and once clicked shows content and no buttons', () => {
    expect(targeted_User).toBeInTheDocument()
    userEvent.click(targeted_User)
    expect(targeted_User).not.toBeInTheDocument()
    const content= screen.getByText(/Miranda Rights/i);
    expect(content).toBeInTheDocument()
});

test('Situation: selecting KYR button and then community member user button appears and once clicked shows content and no buttons', () => {
    expect(communityM_User).toBeInTheDocument()
    userEvent.click(communityM_User)
    expect(communityM_User).not.toBeInTheDocument()
    const content= screen.getByText(/Miranda Rights/i);
    expect(content).toBeInTheDocument()
});