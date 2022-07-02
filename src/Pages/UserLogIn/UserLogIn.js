import { React, useState } from 'react';
import Frame from '../../Images/frame.png';
import {Link } from 'react-router-dom';
import './UserLogIn.css'
import {Container, Row, Col} from 'react-bootstrap';
import logo from "../../Images/logo.png";
import { Button } from 'bootstrap';


const UserLogIn = () => {

    return (
        <div className="formPage">
            <Container className="contentArea">
                <Row>
                    <Col lg={6}>
                        <img src={Frame} alt="frame"/>
                    </Col>

                    <Col lg={6}>
                        <div className="formArea text-center">
                            <div>
                                <img src={logo} alt="logo"/>
                            </div>
                            <form className="loginArea">
                                <input placeholder="Phone Number, username, or email"/>
                                <input placeholder="Password" type="password"/>
                                <button className="loginBtn">Log In</button>
                            </form>
                            <span className="divider">or</span>
                            <div>
                                <a href="#" className="fbLogin">Log In with Facebook</a>
                            </div>
                        </div> 
                        <div className="fromBottom">
                            <p>Don't have an account? <Link to="/usersignup">Sign up</Link></p>
                        </div>                  
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default UserLogIn;