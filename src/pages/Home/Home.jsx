import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Home = () => {
    return (
        <Container>
            <Row>
                <Col>sm=true</Col>

            </Row>
            <Row>
                <Col sm={2}>nnn</Col>
                <Col sm={10}>mmm</Col>
            </Row>
        </Container>
    );
};

export default Home;