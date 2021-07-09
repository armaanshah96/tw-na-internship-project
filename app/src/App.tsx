import React from 'react';
import './App.css';
import TableOfContents from './components/TableOfContents'
function App() {
    return (
        <div data-testid="custom-element" className="App">
          <header className="App-header">
            <TableOfContents />
          </header>
        </div>
    );
}

export default App;
