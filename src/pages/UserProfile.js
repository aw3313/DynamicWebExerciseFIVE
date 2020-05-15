import React from 'react';
import UserProfileComponents from '../components/UserProfileComponents';

function UserProfile({userInformation}){
    return (
        <div>
            <h1>User Profile</h1>
            <p> User is logged in as: {userInformation.email}</p>
            
        </div>
    )
}

export default UserProfile;
