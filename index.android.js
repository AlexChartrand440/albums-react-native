// Index.android.js - place code in here for android

// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create component
const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// Render it to the device
// Render application 'albums'
// This must match up with the project name
AppRegistry.registerComponent('albums', () => App);
