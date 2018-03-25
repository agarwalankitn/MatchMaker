import React from 'react';
import { StackNavigator } from "react-navigation";
import ApolloContainer from './core/ApolloContainer';
import MainScreen from './MainScreen';

const AppNavigator = StackNavigator(
  {
    Page: { screen: MainScreen },
  }
);

const App = () => (
  <ApolloContainer>
    <AppNavigator />
  </ApolloContainer>
);

export default App;
