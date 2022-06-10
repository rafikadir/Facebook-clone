import React from 'react';
import './UserProfile.css';
import { Col, Container, Row } from 'react-bootstrap';
import UserInfo from '../../Components/UserInfo/UserInfo';
import UserFeed from '../../Components/UserFeed/UserFeed';

const UserProfile = () => {
    return (
        <>
           <Container className="contentArea mt-4">
                <Row>
                    <Col lg={12}>
                        <UserInfo />
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <UserFeed />
                    </Col>
                </Row>
           </Container>
        </>
    );
};

export default UserProfile;