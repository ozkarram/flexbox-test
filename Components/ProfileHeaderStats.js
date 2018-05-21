import React from 'react';
import {View, Text} from 'react-native';
import MainStyle from "../Styles/MainStyle";

export default class ProfileHeaderStats extends React.Component {
  render () {
    return (
      <View style={MainStyle.ProfileStats}>
        <View style={MainStyle.ProfileStatItem}>
          <Text style={MainStyle.BoldText}>2300</Text>
          <Text>Photos</Text>
        </View>
        <View style={MainStyle.ProfileStatItem}>
          <Text style={MainStyle.BoldText}>300</Text>
          <Text>Videos</Text>
        </View>
        <View style={MainStyle.ProfileStatItem}>
          <Text style={MainStyle.BoldText}>20K</Text>
          <Text>Projects</Text>
        </View>
      </View>
    );
  }
}