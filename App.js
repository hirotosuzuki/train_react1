/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { StackNavigator } from 'react-navigation';
import React, { Component } from 'react';
import CityListScreen from './src/CityListScreen';
import WeatherScreen from './src/WeatherScreen';
import {View, Text} from 'react-native';

const routes = {
  // Componentとrouteの名前とを対応づける
  CityList: {
    screen: CityListScreen,
    navigationOptions: {
      title: '都道府県一覧',
    },
  },
  Weather: {
    screen: WeatherScreen,
  },
}

const config = {
  // アプリを起動したときに最初に表示される画面の指定
  initialRouteName: 'CityList',
};

const App = StackNavigator(routes, config);

export default App;
