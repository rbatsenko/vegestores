import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import MapWithLocation from './Map';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header clearfix">
          <a className="App-logo-link" href="/"><img src={logo} className="App-logo" alt="Warzywniak - Info" /></a>
          <div className="App-search">
            <h1>Znajdź warzywniak</h1>
            <input className="App-search-field" id="search" name="search" placeholder="Wpisz adres..." />
          </div>
        </header>
        <main>
          <MapWithLocation />
        </main>
      </div>
    );
  }
}

export default App;