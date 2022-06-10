import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './UserInfo.css';

const UserInfo = () => {
    return (
       <Row>
           <Col lg={4}>
                <div className="userThumb">
                    <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="user" />
                </div>
           </Col>
           <Col lg={8}>
               <div className="userInfoText">
                    <div className="userName d-flex">
                        <h4>i_am_rafikadir</h4>
                        <button className="editProfile">
                            Edit profile
                        </button>
                    </div>
                    <div className="profileDetails">
                        <ul>
                            <li><b>80</b> post</li>      
                            <li><b>32</b> follower</li>      
                            <li><b>80</b> following</li>            
                        </ul>
                    </div>
                    <div className="profileDescription">
                        <h6 className="Uname">Rafi Kadir • Web Developer</h6>
                        <p className="Udescription">
                            👨‍💻• Web D𝖾𝗏𝖾𝗅𝗈𝗉𝖾𝗋 - MERN <br />
                            🧠• JavaScript - ReactJS <br />
                            💻• Freelance Web Developer & Content  <br />
                            📘• S𝗁𝖺𝗋𝗂𝗇𝗀 R𝖾𝗌𝗈𝗎𝗋𝖼𝖾s 𝗈𝖿 Web D𝖾𝗏𝖾𝗅𝗈𝗉𝗆𝖾𝗇𝗍
                        </p>
                    </div>
               </div>
           </Col>
       </Row>
    );
};

export default UserInfo;