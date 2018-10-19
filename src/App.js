import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MapWithLocation from './components/Map';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <MapWithLocation />
      </div>
    );
  }
}

export default App;