import React from 'react';
import styled from 'styled-components';

const IconContainer = styled.ScrollView`
  background-color:red;
`;

const IconContainerInnerView = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const SmallImage = styled.Image`
  width: 64;
  height: 64;
`;

const CircularView = styled.TouchableOpacity`
  border-radius: 48;
  padding-left: 16;
  padding-right: 16;
  padding-top: 16;
  padding-bottom: 16;
  background-color: blue;
  height: 96;
  width: 96;
  margin-left: 5;
  margin-right: 5;
  margin-top: 5;
  margin-bottom: 5;
`;

const IconListContainer = styled.View`
  height: 128;
`;


const IconList = (props) => {
  const icons = (props.icons || {}).map(icon => (
    <CircularView onPress={this.onPress}>
      <SmallImage
        key={icon.id}
        source={icon.path}
      />
    </CircularView>));

  return (
    <IconContainer
      horizontal
      onPress={props.onPress}
    >
      <IconContainerInnerView>
        {icons}
      </IconContainerInnerView>
    </IconContainer>);
};

export { IconList, IconListContainer };
