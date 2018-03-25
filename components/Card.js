import React from 'react';
import styled from 'styled-components';
import { CardItem, Text, Body } from 'native-base';

const CardContainer = styled.TouchableOpacity`
  border-width: 1;
  border-radius: 2;
  border-color: #ccc;
`;

const TitleText = styled.Text`
font-size:24;
font-weight: bold;
`;

const JobText = styled.Text`
font-size:18;
font-weight: normal;
`;
const CompanyText = styled.Text`
font-size:16;
font-weight: normal;
`;
const DescriptionText = styled.Text`
font-size:16;
font-weight: normal;
`;

const OpportunityCard = props => (
  <CardContainer onPress={props.onPress}>
    <CardItem header>
      <TitleText>{props.title}</TitleText>
    </CardItem>
    <CardItem>
      <Body>
        <JobText>
          {`Job Name:${props.jobName}`}
        </JobText>
        <CompanyText>
          {`Company Name:${props.company}`}
        </CompanyText>
        <DescriptionText>
          {`Description:${props.description}`}
        </DescriptionText>
      </Body>
    </CardItem>
    <CardItem footer>
      <Text>{props.footer}</Text>
    </CardItem>
  </CardContainer>
);


export default OpportunityCard;
