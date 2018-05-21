import React from 'react';
import {View} from 'react-native';
import MainStyle from './Styles/MainStyle.js';
import ProfileHeader from "./Components/ProfileHeader";
import ProfileHeaderStats from "./Components/ProfileHeaderStats";
import ProfileOptions from "./Components/ProfileOptions";
import ImageFeed from "./Components/ImageFeed";

export default class App extends React.Component {
  render() {
    return (
      <View style={MainStyle.container}>
        {/* This is a comment <Text>Hello world! This is  a test with flexbox!</Text>*/}
        <ProfileHeader name={"Oscar Josue Alvarez"} twitterProfile={"ozkar_ram"}/>

        <ProfileHeaderStats amountPhotos={8000} amountVideos={32} amountProjects={18}/>

        <View style={MainStyle.HorizontalLine} />
        <ProfileOptions/>
        <View style={MainStyle.HorizontalLine} />

        <ImageFeed/>

      </View>
    );
  }
}
