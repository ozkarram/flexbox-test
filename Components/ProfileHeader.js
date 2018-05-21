import React from 'react';
import {View, Text} from 'react-native';
import {Like, CircularImage, Options} from '../Images/ImageUtil';
import MainStyle from '../Styles/MainStyle.js';
import PropTypes from 'prop-types';

export default class ProfileHeader extends React.Component {
  render() {
    return (
      <View style={MainStyle.ProfileHeader}>
        <Like style={MainStyle.LikeButton}/>
        <View style={MainStyle.ProfileHeaderCentralContainer}>
          <CircularImage/>
          <Text style={MainStyle.ProfileName}>{this.props.name}</Text>
          <Text style={MainStyle.ProfileTwitterProfile}>@{this.props.twitterProfile}</Text>
        </View>
        <Options style={MainStyle.OptionsButton}/>
      </View>
    );
  }
}

ProfileHeader.propTypes = {
  name: PropTypes.string,
  twitterProfile: PropTypes.string
};