import React from 'react';
import { Text, Container, Header, Content, Item, Input, Icon, Button } from 'native-base';

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

  handleSubmitEditing=(text) => {
    console.log('submitted');
    this.setState({ searchValue: text });
  }

  render() {
    return (
      <Container>
        <Header />

        <Item regular>
          <Icon name="ios-search" />
          <Input
            value={this.state.searchValue}
            onChangeText={this.handlechange}
            onSubmitEditing={this.handleSubmitEditing}
            placeholder="Search..."
          />
        </Item>

        <Text>col1</Text>

        <Text>col2</Text>


      </Container>
    );
  }
}
