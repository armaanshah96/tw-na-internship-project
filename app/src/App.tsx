import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [catPicture, setCatPicture] = useState<{file: string} | undefined>(undefined)

    function getCatPic() {
        fetch('/api/cats').then(response => response.json())
            .then(json => setCatPicture(json))
    }


    return (
        <div className="App">
            <header className="App-header">
                {catPicture && <img src={catPicture.file} className={"App-Cat"} alt={"A cat picture!"} />}
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <p>Click here to see a cat :3</p>
                <button onClick={getCatPic}>Cat Pictures!</button>


            </header>
        </div>
    );
}

export default App;
