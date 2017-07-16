import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

const albumUrl = process.env.ALBUM_URL || 'http://localhost:3000';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get(albumUrl)
      .then((response) => {
        console.log(response);
        this.setState({ albums: response.data });
      });
  }

  renderAlbums() {
    return this.state.albums.map((album) =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
