import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const SERVICE_URL = 'https://data.from80.hasura-app.io/v1alpha1/graphql';
const client = new ApolloClient({
  link: new HttpLink({ uri: SERVICE_URL }),
  cache: new InMemoryCache({
    addTypename: false,
  }),
});

const ApolloContainer = props => (
  <ApolloProvider client={client}>
    {props.children}
  </ApolloProvider>
);

export default ApolloContainer;
