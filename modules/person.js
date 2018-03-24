import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { StyleSheet, Text, View } from 'react-native';


const query = gql`
{
  Person{
    id
  }
}
`;

const Persons = () => (
  <Query query={query}>
    {({ loading, error, data }) => {
      console.log('loaded', { loading, error, data });
      if (loading) return <Text>Loading...</Text>;
      if (error) return <Text>Error :</Text>;

        return null;
      // return data.Person.map(p => (
      //   <div key={p.id}>
      //     <p>{`${p.id}`}</p>
      //   </div>
      // ));
    }}
  </Query>
);


export default Persons;
