import React from 'react';
import {View, Text} from 'react-native';
import MainStyle from './Styles/MainStyle.js';
import {Like, CircularImage, Options,
        ButtonOne, ButtonTwo, ButtonThree, Thumb} from './Images/ImageUtil';

export default class App extends React.Component {
  render() {
    return (
      <View style={MainStyle.container}>
        {/* This is a comment <Text>Hello world! This is  a test with flexbox!</Text>*/}
        <View style={MainStyle.ProfileHeader}>
          <Like style={MainStyle.LikeButton}/>
          <View style={MainStyle.ProfileHeaderCentralContainer}>
            <CircularImage/>
            <Text style={MainStyle.ProfileName}>Oscar Alvarez</Text>
            <Text style={MainStyle.ProfileTwitterProfile}>@ozkarram</Text>
          </View>
          <Options style={MainStyle.OptionsButton}/>
        </View>
        <View style={MainStyle.ProfileStats}>
          <View style={MainStyle.ProfileStatItem}>
            <Text style={MainStyle.BoldText}>2300</Text>
            <Text>Photos</Text>
          </View>
          <View style={MainStyle.ProfileStatItem}>
            <Text style={MainStyle.BoldText}>300</Text>
            <Text>Videos</Text>
          </View>
          <View style={MainStyle.ProfileStatItem}>
            <Text style={MainStyle.BoldText}>20K</Text>
            <Text>Projects</Text>
          </View>
        </View>
        <View style={MainStyle.HorizontalLine} />
        <View style={MainStyle.ProfileOptionsContainer}>
          <Text style={MainStyle.FollowButtonStyle}>+ FOLLOW</Text>
          <View style={MainStyle.ProfileOptionsButtons}>
            <ButtonOne/>
            <ButtonTwo/>
            <ButtonThree/>
          </View>
        </View>
        <View style={MainStyle.HorizontalLine} />


        <Thumb style={MainStyle.ImageThumb} />
        <Thumb style={MainStyle.ImageThumb} />
        <Thumb style={MainStyle.ImageThumb} />

      </View>
    );
  }
}
