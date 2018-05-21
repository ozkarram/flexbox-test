import React from 'react';
import {View, Text} from 'react-native';
import MainStyle from "../Styles/MainStyle";
import PropTypes from 'prop-types';

export default class ProfileHeaderStats extends React.Component {
  render () {
    return (
      <View style={MainStyle.ProfileStats}>
        <View style={MainStyle.ProfileStatItem}>
          <Text style={MainStyle.BoldText}>{this.props.amountPhotos}</Text>
          <Text>Photos</Text>
        </View>
        <View style={MainStyle.ProfileStatItem}>
          <Text style={MainStyle.BoldText}>{this.props.amountVideos}</Text>
          <Text>Videos</Text>
        </View>
        <View style={MainStyle.ProfileStatItem}>
          <Text style={MainStyle.BoldText}>{this.props.amountProjects}</Text>
          <Text>Projects</Text>
        </View>
      </View>
    );
  }
}

ProfileHeaderStats.propTypes = {
  amountPhotos: PropTypes.number.isRequired,
  amountVideos: PropTypes.number.isRequired,
  amountProjects: PropTypes.number.isRequired
};