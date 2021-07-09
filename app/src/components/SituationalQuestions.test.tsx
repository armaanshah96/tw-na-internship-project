import React from "react";
import {render, screen} from '@testing-library/react';
import SituationalQuestions from "./SituationalQuestions";
import userEvent from "@testing-library/user-event";
let targetedUser:any;
let communityMUser:any;
beforeEach(()=> {
    render(<SituationalQuestions/>);
    targetedUser=screen.getByText(/Targeted User/i)
    communityMUser=screen.getByText(/Community Member User/i)

});
test('Situation: Clicking targeted user button shows content and removes button', () => {
    expect(targetedUser).toBeInTheDocument()
    userEvent.click(targetedUser)
    expect(targetedUser).not.toBeInTheDocument()
    const content= screen.getByText(/Miranda Rights/i);
    expect(content).toBeInTheDocument()
});

test('Situation: Clicking community member button shows content and removes button', () => {
    expect(communityMUser).toBeInTheDocument()
    userEvent.click(communityMUser)
    expect(communityMUser).not.toBeInTheDocument()
    const content= screen.getByText(/Miranda Rights/i);
    expect(content).toBeInTheDocument()
});