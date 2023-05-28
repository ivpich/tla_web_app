import React from 'react';
import './UserProfile.css';
import userAvatar from './circle_logo.png'; // Ensure this path is correct

function UserProfile({ user }) {
    return (
        <div className="user-profile">
            <img src={userAvatar} alt="User Avatar" />
            <h2>{user.firstName} {user.lastName}</h2>
            <p>{user.occupation}</p>
            <p>{user.role}</p>
            <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: `${user.trustPoints}%` }}></div>
            </div>
            <p>Trust Points: {user.trustPoints}</p>
        </div>
    );
}

export default UserProfile;