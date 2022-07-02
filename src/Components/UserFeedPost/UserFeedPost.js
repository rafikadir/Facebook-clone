import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './UserFeedPost.css'

const UserFeedPost = () => {
    return (
        <Container>
           <Row>
                <Col lg={4} className="mb-4">
                    <img src="https://picsum.photos/1080" alt="random"/>
                </Col>
                <Col lg={4}>
                    <img src="https://picsum.photos/1080" alt="random"/>
                </Col>
                <Col lg={4}>
                    <img src="https://picsum.photos/1080" alt="random"/>
                </Col>
                <Col lg={4}>
                    <img src="https://picsum.photos/1080" alt="random"/>
                </Col>
            </Row> 
        </Container>
    );
};

export default UserFeedPost;