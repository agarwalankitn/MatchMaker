import React from 'react';
import { debounce } from 'lodash';
import { ScrollView } from 'react-native';
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
          <Text>{this.state.searchValue}</Text>
        </Container>
      </ScrollView>
    );
  }
}
