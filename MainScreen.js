import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Persons from './modules/person';
import HomeScreen from './HomeScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const MainScreen = () => (
  // <View style={styles.container}>
  //   <Text>Hello !!</Text>
  //   <Persons />
  // </View>
  <HomeScreen />
);

export default MainScreen;
