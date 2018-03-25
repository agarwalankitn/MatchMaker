import React from 'react';
import { Container, Header, Content } from 'native-base';
import Card from './Card';

const SampleScreen = () => (
  <Container>
    <Content>
      <Card
        title="Teach physics to children"
        company="SCIENCE FOR KIDS"
        description="We need people to teach basic physics to twele year old kids"
      />
      <Card
        title="Help in laboratory"
        company="SOUTH SCHOOL FOUNDATION"
        description="We are looking for people to help student with simple science projects"
      />
    </Content>
  </Container>
);

export default SampleScreen;
