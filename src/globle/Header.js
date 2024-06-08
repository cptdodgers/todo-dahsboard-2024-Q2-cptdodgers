import React from "react";
import { FaBell } from 'react-icons/fa';
import { IoNotificationsOutline } from 'react-icons/io5';
import './Header.css';

function Header () {
    return (
        <div className="header">
            <h2 className="dashboard-title">Dashboard</h2>

            <div className="user-profile-and-bell">
                <div className="bell-icon">
                    <IoNotificationsOutline />
                </div>
                
                <div className="user-profile">
                    <img src="user-profile-logo.png" alt="User Profile" />
                </div>
            </div>
            <h2>Welcome Back, john Doe</h2>
            <p>The end of the year is coming. Are you planning your performance interviews? You can do this super efficiently with Acmy.</p>
            <a href="#">Look here for more information</a>
        </div>
    );
}


export default Header;