{/*import GridImage from './grid';
import Like from './like';
import List from './list';
import More from './more';
import Radio from './radio';
import ImageItem from './thumb';*/}
import React from "react";
import {View, Image, TouchableOpacity} from "react-native";
import { StyleSheet } from 'react-native';
import FitImage from 'react-native-fit-image';

export class Like extends React.Component {

  render() {

    styles = StyleSheet.create({
      container : {
        width: 50,
        height: 50
      },
      square : {

      }
    });

    return (
      <View style={styles.container}>
        <Image
          source={require('./like.png')}
        />
      </View>
    );
  }
}

export class CircularImage extends React.Component {
  render() {

    styles = StyleSheet.create({
      container : {
        width: 60,
        height: 60,
        borderRadius: 30,
        overflow: 'hidden',
        justifyContent: 'center'
      },
      img : {
        backgroundColor: '#ff361e',
        justifyContent: 'center',
        width: 60,
        height: 60,
        alignItems: 'center'
      }
    });

    return (
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={require('./photo.png')}
        />
      </View>
    );
  }
}

export class Options extends React.Component {
  render() {

    styles = StyleSheet.create({
      container : {
        width: 50,
        height: 50
      },
      square : {

      }
    });

    return (
      <View style={styles.container}>
        <Image
          source={require('./more.png')}
        />
      </View>
    );
  }
}

export class ButtonOne extends React.Component {
  render() {

    styles = StyleSheet.create({
      container : {
        width: 50,
        height: 50,
        justifyContent: 'center'
      },
      img : {
        tintColor: '#db4cc9'
      }
    });

    return (
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={require('./list.png')}
        />
      </View>
    );
  }
}

export class ButtonTwo extends React.Component {
  render() {

    styles = StyleSheet.create({
      container : {
        width: 50,
        height: 50,
        justifyContent: 'center'
      }
    });

    return (
      <View style={styles.container}>
        <Image
          source={require('./grid.png')}
        />
      </View>
    );
  }
}

export class ButtonThree extends React.Component {
  render() {

    let styles = StyleSheet.create({
      container: {
        width: 40,
        height: 40,
        justifyContent: 'center'
      }
    });

    return (
      <View style={styles.container}>
        <Image
          source={require('./radio.png')}
        />
      </View>
    );
  }
}

export class ImageItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      singleImage: true
    };
    this.imageClicked = this.imageClicked.bind(this);
  }

  imageClicked() {
    this.setState({
      singleImage: !this.state.singleImage
    })
  }

  render() {

    styles = StyleSheet.create({
      container : {
        margin: 10,
        height: 200,
        borderRadius: 10,
        overflow: 'hidden',
      },
      image : {
        flex: 1,
        alignSelf: 'stretch'
      }
    });

    return (
      <TouchableOpacity style={styles.container}
                        onPress={this.imageClicked}>
        <FitImage
          style={styles.image}
          source={this.state.singleImage ? require('./thumb.jpg') : require('./thumb2.jpg')}
        />
      </TouchableOpacity>
    );
  }
}