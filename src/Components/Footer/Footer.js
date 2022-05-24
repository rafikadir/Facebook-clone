import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footerArea">
            <ul>
               <li><a href="#">About</a></li>
               <li><a href="#">Help</a></li>
               <li><a href="#">Press</a></li>
               <li><a href="#">API</a></li>
               <li><a href="#">Jobs</a></li>
               <li><a href="#">Privacy</a></li>
               <li><a href="#">Terms</a></li>
               <li><a href="#">Locations</a></li>
               <li><a href="#">Top Accounts</a></li>
               <li><a href="#">Hashtags</a></li>
               <li><a href="#">Language</a></li>
            </ul>
            <div className="copyrightArea">
                <p>&copy; 2022 Instagram from Meta</p>
            </div>
        </footer>
    );
};

export default Footer;