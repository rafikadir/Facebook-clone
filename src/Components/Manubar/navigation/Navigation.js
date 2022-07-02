import React from 'react';
import './Navigation.css';
import { BiHomeAlt } from "react-icons/bi";
import { FiMessageSquare } from "react-icons/fi";
import { BsPlusSquare } from "react-icons/bs";
import { IoCompassOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';



const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <li>
                    <Link to="/">
                        <BiHomeAlt/>
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        <FiMessageSquare/>
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        <BsPlusSquare/>
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        <IoCompassOutline/>
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        <AiOutlineHeart/>
                    </Link>
                </li>
                <li className="userProfile">
                    <Dropdown>
                        <Dropdown.Toggle>
                            <img src='https://randomuser.me/api/portraits/men/75.jpg' alt="user" />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">Saved</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">Setting</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-4">Log Out</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;