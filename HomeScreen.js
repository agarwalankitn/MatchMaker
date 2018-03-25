import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { debounce } from 'lodash';
import { ScrollView } from 'react-native';
import { Text, Container, Header, Item, Input, Icon } from 'native-base';
import IconList from './components/IconList';

const IconListContainer = styled.View`
  height: 128;
`;

const categoryQuery = gql`
query fetch_Category{
  Category {
    id
    name
    description
  }
}
`;

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      selectedCategories: [],
    };
  }

  handlechange=(text) => {
    this.setState({ searchValue: text });
  }

  _onCategorySelected = (catId) => {
    let selectedCategories = [];
    const index = this.state.selectedCategories.indexOf(catId);

    if (index > -1) {
      selectedCategories = this.state.selectedCategories.filter(item => item !== catId);
    } else {
      selectedCategories = [...this.state.selectedCategories, catId];
    }
    this.setState({ selectedCategories });
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
            <Query query={categoryQuery}>
              {({ data }) => {
                const categories = (data.Category || []).map(c => ({
                    id: c.id,
                    selected: this.state.selectedCategories.includes(c.id),
                    name: c.name,
                  }));
                return (<IconList icons={categories} onPress={this._onCategorySelected} />);
              } }
            </Query>
          </IconListContainer>
          <Text>{this.state.searchValue}</Text>
        </Container>
      </ScrollView>
    );
  }
}
