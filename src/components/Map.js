import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

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

  snazzyMapsStyles = [
    {
      "featureType": "landscape.man_made",
      "elementType": "geometry",
      "stylers": [
          {
              "hue": "#ffee00"
          },
          {
              "saturation": "50"
          }
      ]
    },
    {
      "featureType": "landscape.natural",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#d0e3b4"
          }
      ]
    },
    {
      "featureType": "landscape.natural.terrain",
      "elementType": "geometry",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
    },
    {
      "featureType": "poi.business",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
    },
    {
      "featureType": "poi.medical",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#fbd3da"
          }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#bde6ab"
          }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#ffe15f"
          }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "color": "#efd151"
          }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#ffffff"
          }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "black"
          }
      ]
    },
    {
      "featureType": "transit.station.airport",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#cfb2db"
          }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#a2daf2"
          }
      ]
    }
  ];

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        this.setState({
          userLocation: { lat: latitude, lng: longitude },
          zoom: 13,
          loading: false
        });
      },
      () => {
        this.setState({ loading: false });
      }
    );
  }

  render() {
    const { loading, userLocation, zoom } = this.state;
    const { google, address } = this.props;

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
          google={ google }
          zoom={ typeof address.zoom !== undefined ? address.zoom : zoom }
          style={ this.mapStyles }
          center={ address.latLng }
          initialCenter={ userLocation }
          styles={ this.snazzyMapsStyles }
        >
          <Marker
            title={ 'Your position' }
            name={ 'Your position' }
            position={ userLocation }
            icon={{
              url: '/user-pin.svg',
              anchor: new google.maps.Point(32,64),
              scaledSize: new google.maps.Size(64,64)
            }}
          />
        </Map>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    address: state.address
  }
};

const MapWithLocationGoogleAPI = GoogleApiWrapper({
  apiKey: 'AIzaSyBlVCXYggvwxrrHWeEqePL1FN5oCiJ8czw'
})(MapWithLocation);

export default connect(mapStateToProps)(MapWithLocationGoogleAPI);