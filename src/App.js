import React, { Component } from 'react';
import logo from './logo.svg';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './App.css';

class App extends Component {
  loadMap = () => {
    
  }

  componentDidMount() {
    this.loadMap();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div id="map"></div>
      </div>
    );
  }
}

export default App;
