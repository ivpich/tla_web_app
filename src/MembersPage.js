// MembersPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './MembersPage.css';

function MembersPage() {
    const members = [
        {
            id: 1,
            avatar: "https://via.placeholder.com/150",
            name: "John Doe",
            title: "Software Engineer"
        },
        // ... add more members as needed
    ];

    return (
        <div className="members-grid">
            {members.map(member => (
                <Link to={`/profile/${member.id}`} key={member.id}>
                    <div className="member-card">
                        <img src={member.avatar} alt="avatar" className="avatar" />
                        <h2 className="name">{member.name}</h2>
                        <h3 className="title">{member.title}</h3>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default MembersPage;
