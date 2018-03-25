import React from 'react';
import { Container, Header, Content } from 'native-base';
import Card from './Card';

const SampleScreen = () => (
  <Container>
    <Header />
    <Content>
      <Card
        title="some title"
        header="my card"
        jobName="some job name"
        company="some company"
        description="description"
      />
      <Card
        title="some title"
        header="my card"
        jobName="some job name"
        company="some company"
        description="description"
      />
    </Content>
  </Container>
);

export default SampleScreen;
