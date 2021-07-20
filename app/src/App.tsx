import React from 'react';
import './App.css';
import TableOfContents from './components/TableOfContents'
import Cat from './components/Cat'

function App() {
    return (
        <div data-testid="custom-element" className="App">
          <header className="App-header">
            <Cat/>
            <TableOfContents />
          </header>
        </div>
    );
}

export default App;
