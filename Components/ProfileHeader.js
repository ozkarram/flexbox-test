import React from 'react';
import {View, Text} from 'react-native';
import {Like, CircularImage, Options} from '../Images/ImageUtil';
import MainStyle from '../Styles/MainStyle.js';

export default class ProfileHeader extends React.Component {
  render() {
    return (
      <View style={MainStyle.ProfileHeader}>
        <Like style={MainStyle.LikeButton}/>
        <View style={MainStyle.ProfileHeaderCentralContainer}>
          <CircularImage/>
          <Text style={MainStyle.ProfileName}>Oscar Alvarez</Text>
          <Text style={MainStyle.ProfileTwitterProfile}>@ozkarram</Text>
        </View>
        <Options style={MainStyle.OptionsButton}/>
      </View>
    );
  }
}