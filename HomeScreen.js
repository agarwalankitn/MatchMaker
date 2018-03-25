import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { debounce } from 'lodash';
import { ScrollView } from 'react-native';
import { Item, Input, Icon } from 'native-base';
import IconList from './components/IconList';
import { Card } from './components';

const IconListContainer = styled.View`
  height: 128;
`;

const CardListContainer = styled.View`
  flex:1
`;

const IconContainer = styled.View`
  flex:1;
  background-color: white;
  justify-content: center;
  align-items: center;
  padding-top: 40;
  padding-bottom: 40;
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

const openingsQuery = gql`
query fetch_Opening ($ids: [int], $name: String) {
  Opening(where: {_and: [{Category: {id: {_in: $ids}}}, {city: {_like: $name}}]}) {
    id
    title
    description
    city
    Company {
      name
      description
    }
    Category {
      id
      name
      description
    }
  }
}
`;

const HeaderImage = styled.Image`
  width: 265;
  height: 161;
`;

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: 'San Francisco',
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
        <IconContainer>
          <HeaderImage source={require('./icons/impact-words.png')} />
        </IconContainer>
        <Item regular>
          <Icon name="ios-locate-outline" />
          <Input
            placeholder="San Fransisco"
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

        <CardListContainer>
          <Query query={openingsQuery} variables={{ ids: this.state.selectedCategories, name: `%${this.state.searchValue}%` }} >
            {({ data }) => {
              console.log('data response', data);
           return ((data || {}).Opening || []).map(p => (
             <Card
               key={p.id}
               title={p.title}
               company={p.Company.name}
               description={p.description}
             />
                  ));
}
                }
          </Query>
        </CardListContainer>
      </ScrollView>
    );
  }
}
