import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import './UserFeed.css';
import { FaBuromobelexperte } from "react-icons/fa";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { FiBookmark } from "react-icons/fi";
import UserFeedPost from '../UserFeedPost/UserFeedPost';

const UserFeed = () => {
    return (
        <>  
            <div className="userFeedWrapper">
                <Tabs 
                    defaultActiveKey="home"
                    transition={false}
                    id="noanim-tab-example"
                    className="mb-3 userFeedTabs"
                    >
                    <Tab eventKey="home" title={<span><FaBuromobelexperte/> Posts</span>}>
                        <UserFeedPost />
                    </Tab>

                    <Tab eventKey="profile" title={<span><MdOutlineSlowMotionVideo/> Videos</span>}>
                        Videos
                    </Tab>

                    <Tab eventKey="contact" title={<span><FiBookmark/> Saved</span>}>
                        Saved 
                    </Tab>
                </Tabs>
            </div>
        </>
    );
};

export default UserFeed;