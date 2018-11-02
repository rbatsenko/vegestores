import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { GoogleApiWrapper } from 'google-maps-react';
import { getUserAddress } from '../actions';

class LocationSearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      address: '',
      active: false
    };
  }

  handleChange = address => {
    this.setState({ 
      address,
      active: true
    });
  };

  handleBlur = () => {
    this.setState({
      active: false
    });
  }

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => {
        const formattedAddress = results[0].formatted_address;
        getLatLng(results[0])
        .then(latLng => {
          //console.log('Success', latLng);
          this.setState({ address: formattedAddress });
          this.props.onSelect(formattedAddress, latLng);
        })
        .catch(error => console.error('Error', error));
      })
      .catch(error => console.error('Error', error));
  };

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Wpisz adres...',
                className: 'App-search-field',
              })}
              onBlur={this.handleBlur}
            />
            <div className={`autocomplete-dropdown-container ${this.state.active ? 'active' : ''}`}>
              {/*loading && <div>Loading...</div>*/}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    address: state.address
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onSelect: (address, latLng) => dispatch(getUserAddress({ address, latLng }))
  };
};

const LocationSearchInputGoogleAPI = GoogleApiWrapper({
  apiKey: 'AIzaSyBlVCXYggvwxrrHWeEqePL1FN5oCiJ8czw'
})(LocationSearchInput);

export default connect(mapStateToProps, mapDispatchToProps)(LocationSearchInputGoogleAPI);