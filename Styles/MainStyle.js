import React from 'react';
import { StyleSheet } from 'react-native';

const MainStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    paddingTop: 24
  },
  ProfileHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10
  },
  LikeButton: {
    justifyContent: 'space-around'
  },
  ProfileHeaderCentralContainer: {
    flex: 1,
    alignItems: 'center'
  },
  OptionsButton: {
    justifyContent: 'space-around'
  },




  ProfileStats: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingStart: 20,
    paddingEnd: 20
  },
  BoldText : {
    fontWeight: 'bold'
  },
  ProfileStatItem: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  HorizontalLine: {
    backgroundColor: '#878386',
    height: 2
  },
  ProfileOptionsContainer: {
    height: 40,
    flexDirection: 'row'
  },
  FollowButtonStyle: {
    alignSelf: 'center',
    margin: 10
  },
  ProfileOptionsButtons: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  ImageThumb: {

  },
  ImagesContainer: {
    flex : 2
  }
});

export default MainStyle;