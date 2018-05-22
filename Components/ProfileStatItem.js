import React from 'react';
import {View, Text} from 'react-native';
import MainStyle from "../Styles/MainStyle";
import PropTypes from 'prop-types';

const ProfileStatItem = ({title, amount}) => {
  return (
    <View style={MainStyle.ProfileStatItem}>
      <Text style={MainStyle.BoldText}>{amount}</Text>
      <Text>{title}</Text>
    </View>
  );
};

ProfileStatItem.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired
};

export default ProfileStatItem;