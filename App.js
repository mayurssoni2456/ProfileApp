/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider, connect } from 'react-redux';
import AppStack from './src/routes';
import configureStore from './store';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppStack />
      </Provider>
    );
  }
}
