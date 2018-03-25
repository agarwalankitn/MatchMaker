import React from 'react';
import { Container, Content } from 'native-base';
import IconList from './IconList';

const Icons = [
  {
    id: 1,
    path: require('../icons/test.jpg'), // eslint-disable-line global-require
    name: 'Community',
  },
];

const SampleScreen = () => (
  <Container>
    <Content>
      <IconList icons={Icons} />
    </Content>
  </Container>
);

export default SampleScreen;
