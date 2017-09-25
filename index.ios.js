/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default class sample extends Component {
  render() {
    return (
        <GooglePlacesAutocomplete
          placeholder="Enter Location"
          minLength={2}
          autoFocus
          returnKeyType={'default'}
          fetchDetails
          query={{
            // available options: https://developers.google.com/places/web-service/autocomplete
            key: "AIzaSyDM1W8s4LKPj2yoUwb6vgtQOf-8w88LUpY",
            language: 'en',
          }}
          nearbyPlacesAPI="GoogleReverseGeocoding"
          currentLocation
          enableHighAccuracyLocation={false}
        />
    );
  }
}

AppRegistry.registerComponent('sample', () => sample);
