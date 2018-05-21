import React from 'react';
import {View, Text} from 'react-native';
import {ButtonOne, ButtonTwo, ButtonThree} from '../Images/ImageUtil';
import MainStyle from "../Styles/MainStyle";

export default class ProfileOptions extends React.Component {
  render () {
    return (
      <View style={MainStyle.ProfileOptionsContainer}>
        <Text style={[MainStyle.FollowButtonStyle, MainStyle.BoldText]}>+ FOLLOW</Text>
        <View style={MainStyle.ProfileOptionsButtons}>
          <ButtonOne/>
          <ButtonTwo/>
          <ButtonThree/>
        </View>
      </View>
    );
  }
}