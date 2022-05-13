import React from 'react';
import './Navigation.css';
import { BiHomeAlt } from "react-icons/bi";
import { FiMessageSquare } from "react-icons/fi";
import { BsPlusSquare } from "react-icons/bs";
import { IoCompassOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";


const Navigation = () => {
    return (
        <div className="navigationIcon">
            <ul>
                <li>
                    <BiHomeAlt/>
                </li>
                <li>
                    <FiMessageSquare/>
                </li>
                <li>
                    <BsPlusSquare/>
                </li>
                <li>
                    <IoCompassOutline/>
                </li>
                <li>
                    <AiOutlineHeart/>
                </li>
                <li>
                    users
                </li>
            </ul>
        </div>
    );
};

export default Navigation;