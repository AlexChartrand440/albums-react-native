// Index.ios.js - place code in here for ios

// Import a library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create component
const App = () => (
  <Text>Some Text</Text>
);

// Render it to the device
// Render application 'albums'
// This must match up with the project name
AppRegistry.registerComponent('albums', () => App);
