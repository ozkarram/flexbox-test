import React from 'react';
import { StyleSheet } from 'react-native';

const MainStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column'
  },
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
  },
});

export default MainStyle;