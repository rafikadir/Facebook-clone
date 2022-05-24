import React from 'react';
import Stories from '../../Components/Stories/Stories';
import Feeds from '../../Components/Feeds/Feeds';
import { Col, Container, Row } from 'react-bootstrap';
import HomeSidebar from '../../Components/HomeSidebar/HomeSidebar';
import './Home.css';

const Home = () => {
    return (
        <>
            <Container className="mt-4 contentArea">
                <Row>
                    <Col lg={8}>
                        <Stories />
                        <Feeds />
                    </Col>
                    <Col lg={4}>
                        <HomeSidebar />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Home;