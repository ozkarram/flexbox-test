import  React from 'react';
import {ImageItem} from '../Images/ImageUtil';
import {ScrollView} from 'react-native';
import MainStyle from "../Styles/MainStyle";

export default class ImageFeed extends React.Component {

  arrayImages = ["img1", "img2", "img3", "img4", "img5"];

  render () {
    return (
      <ScrollView style={MainStyle.ImagesContainer}>
        {this.arrayImages.map((img) =>
          <ImageItem key={img} style={MainStyle.ImageThumb} />
        )}
      </ScrollView>
    );
  }
}