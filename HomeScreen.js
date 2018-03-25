import React from 'react';
import { ScrollView } from 'react-native';
import { Text, Container, Header, Content, Item, Input, Icon, Button } from 'native-base';

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

        <Text>{this.state.text1}</Text>

        <Text>col2</Text>


      </Container>
    );
  }
}
