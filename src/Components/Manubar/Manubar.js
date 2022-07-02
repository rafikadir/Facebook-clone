import React from 'react';
import { Container, Row, Col, Form,FormControl } from 'react-bootstrap';
import logo from '../../Images/logo.png';
import {  BrowserRouter as Router, Link} from 'react-router-dom';
import './Manubar.css';
import Navigation from './navigation/Navigation';

const Manubar = () => {
    return (
        <div className="mainMenu">
            <Container className="contentArea">
                <Row className="align-items-center">
                    <Col lg={4}>
                        <div className="logoArea">  
                            <Link to="/">
                                <img className="logo" src={logo} alt="logo" />
                            </Link> 
                        </div>
                    </Col>
                    <Col lg={4} className="text-center">
                        <Form className="d-flex searchForm">
                            <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2 searchInput"
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