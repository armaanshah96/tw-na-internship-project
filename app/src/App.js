import React from 'react';
import './App.css';
import TableOfContents from './components/TableOfContents'
import Cat from './components/Cat'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from "./theme";
import {CssBaseline} from "@material-ui/core";

function App() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div data-testid="custom-element" className="App">
          <header className="App-header">
           {/* <Cat/>*/}
            <TableOfContents />
          </header>
        </div>
        </ThemeProvider>

    );
}

export default App;
