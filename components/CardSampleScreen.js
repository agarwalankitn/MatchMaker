import React from 'react';
import { Container, Header, Content } from 'native-base';
import Card from './Card';
import { StyleSheet, Text, View } from 'react-native';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

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

const SampleScreen = () => (
  <Container>
    <Content>
      <Query query={query}>
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error :</Text>;
          return data.Opening.map(p => (
            <Card
              key={p.id}
              itle={p.title}
              company={p.Company.name}
              description={p.description}
            />
          ));
        }}
      </Query>
    </Content>
  </Container>
);

export default SampleScreen;
