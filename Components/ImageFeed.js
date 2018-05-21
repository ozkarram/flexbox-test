import  React from 'react';
import {ImageItem} from '../Images/ImageUtil';
import {ScrollView} from 'react-native';
import MainStyle from "../Styles/MainStyle";

export default class ImageFeed extends React.Component {
  render () {
    return (
      <ScrollView style={MainStyle.ImagesContainer}>
        <ImageItem style={MainStyle.ImageThumb} />
        <ImageItem style={MainStyle.ImageThumb} />
        <ImageItem style={MainStyle.ImageThumb} />
        <ImageItem style={MainStyle.ImageThumb} />
        <ImageItem style={MainStyle.ImageThumb} />
        <ImageItem style={MainStyle.ImageThumb} />
        <ImageItem style={MainStyle.ImageThumb} />
        <ImageItem style={MainStyle.ImageThumb} />
        <ImageItem style={MainStyle.ImageThumb} />
        <ImageItem style={MainStyle.ImageThumb} />
        <ImageItem style={MainStyle.ImageThumb} />
      </ScrollView>
    );
  }
}