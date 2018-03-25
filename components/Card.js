import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.TouchableOpacity`
  padding-left: 20;
  padding-top: 20;
  padding-right: 20;
  padding-bottom: 20;
  border-top-width: 1;
  border-bottom-width: 0;
  border-color: #ccc;
  background-color: white;
  flex-direction: row;
`;


const TitleText = styled.Text`
  font-size: 20;
  font-weight: normal;
  font-style: normal;
  color: #838383;
`;

const CompanyText = styled.Text`
  margin-top: 2;
  font-size:12;
  font-weight: normal;
  color: #979797;
`;
const DescriptionText = styled.Text`
  font-size:12;
  font-weight: normal;
  margin-top: 8;
  color: #979797;
`;
const LinkText = styled.Text`
  font-size:15;
  font-weight: normal;
  margin-top: 10;
  color: #4a90e2;
`;
const TextContainer = styled.View`
  background-color: white;
  padding-right: 20;  
  flex:6;
`;
const LinkContainer = styled.View`
  background-color: white;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const OpportunityCard = props => (
  <CardContainer onPress={props.onPress}>
    <TextContainer>
      <TitleText>{props.title}</TitleText>
      <CompanyText>{props.company}</CompanyText>
      <DescriptionText>{props.description}</DescriptionText>
    </TextContainer>
    <LinkContainer>
      <LinkText>View</LinkText>
    </LinkContainer>
  </CardContainer>
);

export default OpportunityCard;
