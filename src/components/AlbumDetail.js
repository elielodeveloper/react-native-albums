import React from 'react';
import { View, Text, Image } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image } = album;

  return (
    <Card>
      <CardSection style={style.cardSection}>
        <View>
          <Image source={{ uri: thumbnail_image }} />
        </View>
        <View style={style.headerContentStyle}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
    </Card>
  );  
};

const style = {
  cardSection = {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
  headerContentStyle = {
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
}

export default AlbumDetail;
