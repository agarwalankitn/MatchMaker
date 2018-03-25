import React from 'react';
import styled from 'styled-components';
import { debounce } from 'lodash';
import { ScrollView } from 'react-native';
import { Text, Container, Header, Item, Input, Icon } from 'native-base';
import IconList from './components/IconList';

const icons = [
  {
    id: 1,
    path: require('./icons/Animals.png'), // eslint-disable-line global-require
    name: 'Animals',
  },
  {
    id: 2,
    path: require('./icons/Science.png'), // eslint-disable-line global-require
    name: 'Science',
  },
  {
    id: 3,
    path: require('./icons/Sports.png'), // eslint-disable-line global-require
    name: 'Sports',
  },
  {
    id: 4,
    path: require('./icons/Community.png'), // eslint-disable-line global-require
    name: 'Community',
  },
];

const IconListContainer = styled.View`
  height: 128;
`;

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }

  handlechange=(text) => {
    this.setState({ searchValue: text });
  }

  render() {
    return (
      <ScrollView>
        <Container>
          <Header />
          <Item regular>
            <Icon name="ios-locate-outline" />
            <Input
              placeholder="location"
              placeholderTextColor="grey"
              onChangeText={debounce(this.handlechange, 500)}
              blurOnSubmit
            />
          </Item>
          <IconListContainer>
            <IconList icons={icons} onPress={() => {}} />
          </IconListContainer>
          <Text>{this.state.searchValue}</Text>
        </Container>
      </ScrollView>
    );
  }
}
