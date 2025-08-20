import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import SearchInput from './components/SearchInput';

import getImageForWeather from './utils/getImageForWeather';

export default class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ImageBackground
          source={getImageForWeather('Clear')}
          style={styles.imageContainer}
          imageStyle={styles.image}
        >
          <Text style={[styles.textStyle, styles.largeText]}>Ciudad de Mexico, MX</Text>
          <Text style={[styles.smallText, styles.textStyle]}>Soleado y claro</Text>

          <Text style={[styles.textStyle, styles.mediumText]}>31°</Text>

          <SearchInput placeholder="Search a city" />
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#777777',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    textAlign: 'center',
    ...Platform.select({
      ios: {
        fontFamily: 'AvenirNext-Regular',
      },
      android: {
        fontFamily: 'Roboto',
      },
    }),
  },

  largeText: {
    fontSize: 44,
  },

  mediumText: {
    fontSize: 34,
  },

  smallText: {
    fontSize: 24,
  },

  textInput: {
    backgroundColor: '#666',
    color: 'white',
    height: 40,
    width: 100 * 4,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: 'center',
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'cover',
  },
});
