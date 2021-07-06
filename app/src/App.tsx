import React from 'react';
import './App.css';
import TableOfContents from './components/TableOfContents'
import SituationalQuestions from "./components/SituationalQuestions";
function App() {
    return (
        <div className="App">
          <header className="App-header">
            <TableOfContents />
              {/*<SituationalQuestions/>*/}
          </header>
        </div>
    );
}

export default App;
