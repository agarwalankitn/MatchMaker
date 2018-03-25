import React from 'react';
import styled from 'styled-components';


const IconContainer = styled.ScrollView`
  background-color:white;
`;

const IconContainerInnerView = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const SmallImage = styled.Image`
  width: 32;
  height: 32;
`;

const CategoryText = styled.Text`
  margin-top:5
  color: ${({ selected }) => (!selected ? '#4a90e2' : 'white')};
`;

const CircularView = styled.TouchableOpacity`
  border-radius: 48;
  padding-left: 16;
  padding-right: 16;
  padding-top: 16;
  padding-bottom: 16;
  background-color: ${({ selected }) => (selected ? '#4a90e2' : 'white')};
  border-color: #4a90e2;
  border-width: 2;
  height: 96;
  width: 96;
  margin-left: 5;
  margin-right: 5;
  margin-top: 5;
  margin-bottom: 5;
  justify-content: center;
  align-items: center;
`;

const ActiveIconMap = {
  Animals: require('../icons/animals-white.png'),
  Community: require('../icons/community-white.png'),
  Science: require('../icons/science-white.png'),
  Sports: require('../icons/sports-white.png'),
};

const IconMap = {
  Animals: require('../icons/animals-blue.png'),
  Community: require('../icons/community-blue.png'),
  Science: require('../icons/science-blue.png'),
  Sports: require('../icons/sports-blue.png'),
};

const IconList = (props) => {
  const icons = (props.icons || []).map(icon => (
    <CircularView selected={icon.selected} onPress={() => props.onPress(icon.id)} key={icon.id}>
      <SmallImage
        key={icon.id}
        source={icon.selected ? ActiveIconMap[icon.name] : IconMap[icon.name]}
      />
      <CategoryText selected={icon.selected} >{icon.name}</CategoryText>
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

export default IconList;
