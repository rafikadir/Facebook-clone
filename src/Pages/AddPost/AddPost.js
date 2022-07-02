import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AddPost.css';
import icon from '../../Images/upload.png';

const AddPost = () => {
    return (
        <Container className="contentArea pt-100 pb-100">
            <Row>
                <Col lg={12}>
                    <div className="addpostContainer">
                        <p className="newPostText">Create new post</p>
                        <img className="newPostIcon" src={icon} alt="icon" />
                        <h4 className="newPostTile">Drag photos and videos here</h4>
                        <div class="uplodBtn mb-3">
                            <button>Select from computer</button>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={8}>
                    <div className="previewArea">
                        <img src="https://via.placeholder.com/500" alt="preview" />
                    </div>
                </Col>

                <Col lg={4}>
                    <div className="captionArea">
                        <p className='userName'>i_am_rafikadir</p>
                        <form>
                            <div class="form-group">
                                <textarea class="form-control"  rows="4" placeholder="Write a Caption"></textarea>
                            </div>
                            <button className="btn btn-primary">Share Now</button>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AddPost;