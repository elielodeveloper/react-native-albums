import React from 'react';
import { View, Text, Image, Linking } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;

  return (
    <Card>
      <CardSection style={style.cardSection}>
        <View style={style.thmbnailContainerStyle}>
          <Image style={style.thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={style.headerContentStyle}>
          <Text style={style.headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={style.imageStyle} source={{ uri: image }}/>
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL()} text="Buy Now" />
      </CardSection>
    </Card>
  );  
};

const style = {
  cardSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thmbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
