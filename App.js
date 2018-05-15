import React from 'react';
import {View} from 'react-native';
import MainStyle from './Styles/MainStyle.js';
import Pug from './Components/Pug';
import Wizard from './Components/Wizard';
import Porsche from './Components/Porsche';

export default class App extends React.Component {
  render() {
    return (
      <View style={MainStyle.container}>
        {/* This is a comment <Text>Hello world! This is  a test with flexbox!</Text>*/}
        <View style={[MainStyle.image, MainStyle.img1]}>
          <Pug/>
          <Pug/>
        </View>
        <View style={[MainStyle.image, MainStyle.img2]}>
          <Wizard/>
          <Wizard/>
          <Wizard/>
        </View>
        <View style={[MainStyle.image, MainStyle.img3]}>
          <Porsche/>
          <Porsche/>
          <Porsche/>
        </View>
      </View>
    );
  }
}
