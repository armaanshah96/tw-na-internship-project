import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

/*
    Key concepts: Snapshot testing (see: jest snapshot testing documentation)

    CHECKPOINT: So far we've predominantly been creating 'unit tests'. What is a snapshot test and what is it comparing?
    CHECKPOINT: What does this mean for the team in terms of keeping this test up to date?

    Topics to go over: snapshot testing

    Note: while this test is very useful in frontend codebases, we will likely remove it after discussion
 */

test('renders App component', () => {
  const app = render(<App />);
  expect(app).toMatchSnapshot();
});
