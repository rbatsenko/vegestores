import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import MapWithLocation from './Map';
import LocationSearchInput from './LocationSearchInput';
import { createStore } from 'redux';

const store = createStore((state = { count: 0 }) => {
  return state;
});

console.log(store.getState());

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header clearfix">
          <a className="App-logo-link" href="/"><img src={logo} className="App-logo" alt="Warzywniak - Info" /></a>
          <div className="App-search">
            <h1>Znajdź warzywniak</h1>
            <LocationSearchInput />
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