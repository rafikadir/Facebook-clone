import React from 'react';
import { Col, Row, Form, FormGroup, FormControl,Button } from 'react-bootstrap';
import { BiDotsHorizontalRounded, BiHeart } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";

import './Feeds.css';

const Feeds = () => {
    return (
        <div className="feedArea mb-4">
            <Row className="feedTop align-items-center">
                <Col lg={6} className="userInfo">
                    <img src="https://randomuser.me/api/portraits/med/men/75.jpg" alt="user"/>
                    <a href="#" className="userName">rafikadir</a>
                </Col>
                <Col lg={6} className="postInfo">
                    <button>
                        <BiDotsHorizontalRounded/>
                    </button>
                </Col>
            </Row>
            <div className="feedImage">
                <img src="https://via.placeholder.com/600x500" alt="post" />
            </div>
            <div className="feedBottom">
                <div className="feedActivity">
                    <ul>
                        <li><BiHeart/></li>
                        <li><FaRegComment/></li>
                        <li><FiSend/></li>
                        <li><BsBookmark/></li>
                    </ul>
                </div>
                <div className="likesInfo">
                    <p>120 Likes</p>
                </div>
                <div className="postCaption">
                    <p><b>rafikadir</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="postComment">
                    <p><b>rafikadir</b> Lorem Ipsum and typesetting industry.</p>
                </div>
            </div>
            <div className="postBottom">
                <Form className="commentForm">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Add a comment" />
                    </Form.Group>
                    <Button className="commentButton" type="submit">
                        Post
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Feeds;