import React from 'react';
import styled from 'styled-components';
import { Image } from 'react-native';

const IconContainer = styled.ScrollView`
`;

const CircularImage = styled.Image`
  width: 64;
  height: 64;
  border-radius: 32;
`;

const IconList = (props) => {
  console.log('Iconlist render', props);
  const icons = (props.icons || {}).map((icon) => {
    console.log('rendering icon', icon);
    return (
      <CircularImage
        key={icon.id}
        source={icon.path}
      />
    );
  });

  return (
    <IconContainer onPress={props.onPress}>
      {icons}
    </IconContainer>);
};

export default IconList;
