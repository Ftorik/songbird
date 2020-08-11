import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./components/Main";

function App() {
    return (
        <div className="App">
            <div className="line"></div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Main />
                <h1 className='test'>Test div text</h1>
            </header>
        </div>
    );
}

export default App;
