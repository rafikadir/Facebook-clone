import React from 'react';
import './Navigation.css';
import { BiHomeAlt } from "react-icons/bi";
import { FiMessageSquare } from "react-icons/fi";
import { BsPlusSquare } from "react-icons/bs";
import { IoCompassOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";


const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <li>
                    <a href="#">
                        <BiHomeAlt/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FiMessageSquare/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <BsPlusSquare/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <IoCompassOutline/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <AiOutlineHeart/>
                    </a>
                </li>
                <li className="userProfile">
                    <img src='https://randomuser.me/api/portraits/men/75.jpg' alt="user" />
                </li>
            </ul>
        </div>
    );
};

export default Navigation;