/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import MY_KEY from './settings_local';
console.log(MY_KEY);
import React, { Component } from 'react';
import WeatherScreen from './src/WeatherScreen';
import {View, Text} from 'react-native';

export default class App extends Component<{}> {
  render() {
    return (
      <WeatherScreen />
    );
  }
}
