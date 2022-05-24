import React from 'react';
import './SidebarUser.css';
import { Link } from "react-router-dom";

const SidebarUser = () => {
    return (
        <div className="sidebarUser d-flex align-items-center">
            <div className="userImage">
                <img src="https://randomuser.me/api/portraits/med/men/75.jpg" alt="user"/>
            </div>
            <div className="userInfo">
                <Link className="userName" to="/userProfile">rafikadir</Link>
                <p className="userTitle">Web Developer</p>
            </div>  
        </div>
    );
};

export default SidebarUser;