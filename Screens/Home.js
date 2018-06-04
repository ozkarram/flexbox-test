import React from 'react';
import {Button, Text, View} from 'react-native';
import MainStyle from '../Styles/MainStyle.js';
import {createStore} from 'redux';

export default class Home extends React.Component {
  
  reducer = function(state, action) {
    console.log("reducer func started, state: " + state);
    if (action.type === "chg") {
      return state + action.payload;
    }
    return state;
  };

  store = createStore(this.reducer, 0);

  constructor(props) {
    super(props);
    this.reducer = this.reducer.bind(this);
    this.changeState = this.changeState.bind(this);


    this.store.subscribe(() => {
      console.log("changed: " + this.store.getState());
    });
  }

  changeState() {
    console.log("PRE dispatch -- ");
    this.store.dispatch({type: "chg", payload: 1});
    console.log("POST dispatch -- ");
  }


  render() {
    return (
      <View style={MainStyle.container}>
        {/* This is a comment <Text>Hello world! This is  a test with flexbox!</Text>*/}
        <Button onPress={this.changeState} title={"Push to change status"}/>
      </View>
    );
  }
}
