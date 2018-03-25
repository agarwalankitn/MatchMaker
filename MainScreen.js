import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './HomeScreen';
import SampleScreen from './components/CardSampleScreen';
import Openings from './modules/opening'
import Persons from './modules/person'

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

const MainScreen = () => (
  // <View style={styles.container}>
  //   <Text>Hello !!</Text>
  //   <Persons />
  // </View>
  <HomeScreen />
  //<SampleScreen />
  // <Openings />
);

export default MainScreen;
