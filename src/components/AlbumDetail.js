import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = (props) => {
  const { title, artist, thumbnail_image, image, url } = props.album;
  const {
    thumbnailContainerStyle,
    thumbnailStyle,
    headerContentStyle,
    imageStyle
  } = styles;

  return (
    <Card>
      {/* HeaderSection */}
      <CardSection>

        {/* Image */}
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>

        {/* AlbumHeader */}
        <View style={headerContentStyle}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>

      </CardSection>

      {/* AlbumImageSection */}
      <CardSection>

        {/* AlbumImage */}
        <Image
          style={imageStyle}
          source={{ uri: image }}
        />

      </CardSection>

      {/* BuyButtonSection */}
      <CardSection>

        {/* BuyButton */}
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now
        </Button>

      </CardSection>

    </Card>
  );
};

const styles = {
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
