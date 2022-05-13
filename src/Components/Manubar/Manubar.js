import React from 'react';
import { Container, Row, Col, Form,FormControl } from 'react-bootstrap';
import logo from '../../Images/logo.png';
import './Manubar.css';
import Navigation from './navigation/Navigation';

const Manubar = () => {
    return (
        <div className="mainMenu">
            <Container>
                <Row>
                    <Col lg={4}>
                        <div className="logoArea">
                            <img className="logo" src={logo} alt="logo" />
                        </div>
                    </Col>
                    <Col lg={4}>
                        <Form className="d-flex">
                            <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            />
                        </Form>
                    </Col>
                    <Col lg={4}>
                        <Navigation />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Manubar;