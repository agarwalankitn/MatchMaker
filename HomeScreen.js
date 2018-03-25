import React from 'react';
import { Text, Container, Header, Item, Input, Icon } from 'native-base';
import { IconList, IconListContainer } from './components/IconList';

const icons = [
  {
    id: 1,
    path: require('./icons/Animals.png'), // eslint-disable-line global-require
    name: 'Animals',
  },
  {
    id: 1,
    path: require('./icons/Science.png'), // eslint-disable-line global-require
    name: 'Science',
  },
  {
    id: 1,
    path: require('./icons/Sports.png'), // eslint-disable-line global-require
    name: 'Sports',
  },
  {
    id: 1,
    path: require('./icons/Community.png'), // eslint-disable-line global-require
    name: 'Community',
  },
];

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      text1: 'Rando',
    };
  }

  handlechange=(text) => {
    this.setState({ searchValue: text });
  }

  handleSubmitEditing=() => {
    this.setState({ text1: this.state.searchValue });
  }

  render() {
    return (
      <Container>
        <Header />
        <Item regular>
          <Icon name="ios-locate-outline" />

          <Input
            placeholder="location"
            placeholderTextColor="grey"
            value={this.state.searchValue}
            onChangeText={this.handlechange}
            onSubmitEditing={this.handleSubmitEditing}
            blurOnSubmit
          />
        </Item>
        <IconListContainer>
          <IconList icons={icons} />
        </IconListContainer>
        <Text>{this.state.text1}</Text>
        <Text>col2</Text>


      </Container>
    );
  }
}
