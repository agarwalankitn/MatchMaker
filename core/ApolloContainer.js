import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const SERVICE_URL = 'https://data.from80.hasura-app.io/v1alpha1/graphql';
const client = new ApolloClient({ uri: SERVICE_URL });

const ApolloContainer = props => (
  <ApolloProvider client={client}>
    {props.children}
  </ApolloProvider>
);

export default ApolloContainer;
