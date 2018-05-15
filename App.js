import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Pug from './Components/Pug';
import Wizard from './Components/Wizard';
import Porsche from './Components/Porsche';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* This is a comment <Text>Hello world! This is  a test with flexbox!</Text>*/}
        <View style={[styles.image, styles.img1]}>
          <Pug/>
          <Pug/>
        </View>
        <View style={[styles.image, styles.img2]}>
          <Wizard/>
          <Wizard/>
          <Wizard/>
        </View>
        <View style={[styles.image, styles.img3]}>
          <Porsche/>
          <Porsche/>
          <Porsche/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column'
  },
  image: {
    flex: 1
  },
  img1: {
    flex: 2,
    backgroundColor: '#f9ff2b',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  },
  img2: {
    flex: 1,
    backgroundColor: '#400928',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  img3: {
    flex: 3,
    backgroundColor: '#ff1331',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-around'
  },
});
