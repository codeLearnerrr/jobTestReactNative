/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { StatusBar } from 'react-native';

import AppContainer from './components/AppContainer';


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <AppContainer />
    </>
  );
};


export default App;
