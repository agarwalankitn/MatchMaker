import React from 'react';
import { Text } from 'react-native';
import { Container, Header, Content } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default HomeScreen = () => {
    return (
        <Container>
            <Header />
            <Grid>
                <Row style={{ backgroundColor: '#635DB7' }}><Text>col1</Text></Row>
                <Row style={{ backgroundColor: '#00CE9F' }}><Text>col2</Text></Row>
            </Grid>
        </Container>
    );
};
