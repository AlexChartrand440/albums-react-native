// Index.ios.js - place code in here for ios

// Import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create component
const App = () => (
  <Header />
);

// Render it to the device
// Render application 'albums'
// This must match up with the project name
AppRegistry.registerComponent('albums', () => App);
