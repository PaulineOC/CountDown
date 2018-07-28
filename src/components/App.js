import React, { Component } from 'react';
import './App.css';
import Pyramid2 from './Pyramid2.js'



const App = () => {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Countdown</h1>
        </header>
        <div className="App-intro">
        <Pyramid2/>
        </div>
      </div>
    );
}

export default App;
