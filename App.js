import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Pug from './Components/Pug';
import Wizard from './Components/Wizard';
import Porsche from './Components/Porsche';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello world! This is  a test with flexbox!</Text>
          <Pug/>
          <Wizard/>
          <Porsche/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
