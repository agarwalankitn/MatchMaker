import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { StyleSheet, Text, View } from 'react-native';


const query = gql`
query fetch_Person{
  Person{
    id
    firstName
  }
}
`;

const Persons = () => (
  <Query query={query}>
    {({ loading, error, data }) => {
      console.log('loaded', { loading, error, data });
      if (loading) return <Text>Loading...</Text>;
      if (error) return <Text>Error :</Text>;
      return data.Person.map(p => (
        <View key={p.id}>
          <Text>{`${p.id}`}</Text>
          <Text>{`${p.firstName}`}</Text>
          </View>
      ));
    }}
  </Query>
);


export default Persons;
