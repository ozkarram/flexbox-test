import React from 'react';
import {View, Text} from 'react-native';
import MainStyle from "../Styles/MainStyle";
import PropTypes from 'prop-types';
import ProfileStatItem from './ProfileStatItem';

export default class ProfileHeaderStats extends React.Component {
  render () {
    return (
      <View style={MainStyle.ProfileStats}>
        <ProfileStatItem title={"Photos"} amount={this.props.amountPhotos}/>
        <ProfileStatItem title={"Videos"} amount={this.props.amountVideos}/>
        <ProfileStatItem title={"Projects"} amount={this.props.amountProjects}/>
      </View>
    );
  }
}

ProfileHeaderStats.propTypes = {
  amountPhotos: PropTypes.number.isRequired,
  amountVideos: PropTypes.number.isRequired,
  amountProjects: PropTypes.number.isRequired
};