import React from 'react';
import ApolloContainer from './core/ApolloContainer';
import MainScreen from './MainScreen';


const App = () => (
  <ApolloContainer>
    <MainScreen />
  </ApolloContainer>
);

export default App;
