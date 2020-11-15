import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  MyHeader from './Components/Header.js';
import Main from './Components/Main.js';

export default class App extends React.Component
{
  render()
  {
    return(
      <View>
        <MyHeader title = 'Text to Speech'/>
        <Main />
      </View>
    );
  }
}
