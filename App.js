import React from 'react';
import { StackNavigator } from 'react-navigation';
import Profile from './Screens/Profile';
import Home from './Screens/Home';

const App = StackNavigator({
  LeProfile: { screen: Profile},
  LeHome: { screen: Home}
});

export default App;
