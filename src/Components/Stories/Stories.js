import React from 'react';
import './Stories.css';

const Stories = () => {
    return (
        <div className="storyArea mb-4">
            <div className="singleStory">
                <div className="storyImage">
                    <img src="https://randomuser.me/api/portraits/med/men/75.jpg" alt="story"/>
                </div>
                <div className="userName">
                    rafikadir
                </div>
            </div>
            <div className="singleStory">
                <div className="storyImage">
                    <img src="https://randomuser.me/api/portraits/med/men/75.jpg" alt="story"/>
                </div>
                <div className="userName">
                    rafikadir
                </div>
            </div>
            <div className="singleStory">
                <div className="storyImage">
                    <img src="https://randomuser.me/api/portraits/med/men/75.jpg" alt="story"/>
                </div>
                <div className="userName">
                    rafikadir
                </div>
            </div>
        </div>
    );
};

export default Stories;