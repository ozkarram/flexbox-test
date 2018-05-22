import React from 'react';
import {Text, View} from 'react-native';
import MainStyle from '../Styles/MainStyle.js';

export default class Home extends React.Component {
  render() {
    return (
      <View style={MainStyle.container}>
        {/* This is a comment <Text>Hello world! This is  a test with flexbox!</Text>*/}
        <Text >This is a text</Text>
      </View>
    );
  }
}
