import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import MapWithLocation from './Map';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a href="/"><img src={logo} className="App-logo" alt="Warzywniak - Info" /></a>
        </header>
        <main>
          <MapWithLocation />
        </main>
      </div>
    );
  }
}

export default App;