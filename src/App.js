import React, { Component } from 'react';
import logo from './logo.svg';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './App.css';

class App extends Component {
  mapStyles = {
    width: '100%',
    height: 'calc(100vh - 64px)'
  }

  componentDidMount() {
    //this.loadMap();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div id="google-map">
          <Map
            google={this.props.google}
            zoom={12}
            style={this.mapStyles}
            initialCenter={{
              lat: 50.0487156,
              lng: 19.9328273
            }}
          />
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBlVCXYggvwxrrHWeEqePL1FN5oCiJ8czw'
})(App);
