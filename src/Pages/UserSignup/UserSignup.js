import { React } from 'react';
import Frame from '../../Images/frame.png';
import './UserSignup.css'
import {Container, Row, Col} from 'react-bootstrap';
import logo from "../../Images/logo.png";
import { Link } from 'react-router-dom';


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
                                <input placeholder="Email"/>
                                <input placeholder="Full Name"/>
                                <input placeholder="Username"/>
                                <input placeholder="Password" type="password"/>
                                <button className="loginBtn">Sign Up</button>
                            </form>
                            <span className="divider">or</span>
                            <div>
                                <a href="www.facebook.com" className="fbLogin">Log In with Facebook</a>
                            </div>
                        </div> 
                        <div className="fromBottom">
                            <p>Already have an account? <Link to="/userlogin">Log In</Link></p>
                        </div>                  
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default UserLogIn;