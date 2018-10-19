import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapWithLocation extends Component {
  state = {
    userLocation: {
      lat: 52.0206251,
      lng: 18.5963227
    },
    zoom: 7,
    loading: true
  }

  mapStyles = {
    width: '100%',
    height: 'calc(100vh - 64px)'
  }

  componentDidMount(props) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        this.setState({
          userLocation: { lat: latitude, lng: longitude },
          zoom: 12,
          loading: false
        });
      },
      () => {
        this.setState({ loading: false });
      }
    );
  }

  render() {
    const { loading, userLocation } = this.state;
    const { google } = this.props;

    if (loading) {
      return (
        <div className="loading-map">
          <h1>Please allow or block location service :)</h1>
        </div>
      )
    }

    return (
      <div id="google-map">
        <Map
          google={google}
          zoom={this.state.zoom}
          style={this.mapStyles}
          initialCenter={userLocation}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBlVCXYggvwxrrHWeEqePL1FN5oCiJ8czw'
})(MapWithLocation);