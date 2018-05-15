import React from 'react';
import { StyleSheet } from 'react-native';

const MainStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    paddingTop: 24
  },
  /*
  image: {
    flex: 1
  },
  img1: {
    flex: 2,
    backgroundColor: '#f9ff2b',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  },
  img2: {
    flex: 1,
    backgroundColor: '#400928',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  img3: {
    flex: 3,
    backgroundColor: '#ff1331',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-around'
  },*/
  ProfileHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex : 1,
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
    flex: 1,
    flexDirection: 'row'
  },
  ProfileOptionsButtons: {
    backgroundColor: '#7d870e',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-end'
  },
  ImageThumb: {
    flex: 1,
    height: 50,
    width: 50
  },
});

export default MainStyle;