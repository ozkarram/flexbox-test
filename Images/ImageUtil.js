{/*import GridImage from './grid';
import Like from './like';
import List from './list';
import More from './more';
import Radio from './radio';
import Thumb from './thumb';*/}
import React from "react";
import {View, Image} from "react-native";
import { StyleSheet } from 'react-native';

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
        height: 50
      },
      square : {

      }
    });

    return (
      <View style={styles.container}>
        <Image
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
        height: 50
      },
      square : {

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
        width: 50,
        height: 50
      },
      square: {}
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

export class Thumb extends React.Component {
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
          source={require('./thumb.jpg')}
        />
      </View>
    );
  }
}