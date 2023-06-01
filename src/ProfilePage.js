import React from 'react';
import './ProfilePage.css';

function ProfilePage() {
    const profile = {
        avatar: "https://via.placeholder.com/150",
        trustPoints: 75,
        totalPoints: 100,
        title: "Member Title",
        name: "John Doe",
        professionalTitle: "Software Engineer",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    };

    return (
        <div className="profile">
            <div className="left-side">
                <img src={profile.avatar} alt="avatar" className="avatar" />
                <h2 className="title">{profile.title}</h2>
                <div className="status-bar">
                    <div
                        className="fill"
                        style={{ width: `${(profile.trustPoints / profile.totalPoints) * 100}%` }}
                    ></div>
                </div>
                <p className="points">Trust: {profile.trustPoints} out of {profile.totalPoints}</p>
            </div>
            <div className="right-side">
                <h1 className="name">{profile.name}</h1>
                <h3 className="professional-title">{profile.professionalTitle}</h3>
                <p className="bio">{profile.bio}</p>
            </div>
        </div>
    );
}

export default ProfilePage;
