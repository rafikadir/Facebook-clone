import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import './UserFeed.css';

const UserFeed = () => {
    return (
        <>
            <Tabs
                defaultActiveKey="home"
                transition={false}
                id="noanim-tab-example"
                className="mb-3"
                >
                <Tab eventKey="home" title="Posts">
                    <h1>Posts</h1>
                </Tab>
                <Tab eventKey="profile" title="Videos">
                    <h1>Videos</h1>
                </Tab>
                <Tab eventKey="contact" title="Saved">
                    <h1>Saved</h1>
                </Tab>
            </Tabs>
        </>
    );
};

export default UserFeed;