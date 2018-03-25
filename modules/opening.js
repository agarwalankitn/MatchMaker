import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { StyleSheet, Text, View } from 'react-native';


const query = gql`
query fetch_Opening{
  Opening {
    id
    title
    description
    Company {
      name
    }
    Category {
      name
    }
  }
}
`;

const Openings = () => (
  <Query query={query}>
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>;
      if (error) return <Text>Error :</Text>;
      return data.Opening.map(p => (
        <View key={p.id}>
          <Text>{`${p.id}`}</Text>
          <Text>{`${p.title}`}</Text>
          <Text>{`${p.Company.name}`}</Text>
          <Text>{`${p.Category.name}`}</Text>
        </View>
      ));
    }}
  </Query>
);


export default Openings;
