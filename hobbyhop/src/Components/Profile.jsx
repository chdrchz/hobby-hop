import React, { useState, useContext, useEffect } from "react";
import { UserContext } from '../Contexts/UserContext';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import '../Styles/UserProfile.css';

function Profile() {
    const { user } = useContext(UserContext);
    console.log(user);  // Access the user from context
    const [profileImageUrl, setProfileImageUrl] = useState('');
    const [profileData, setProfileData] = useState({
        fullName: '',
        bio: '',
        occupation: '',
        interests: []
    });

    const db = getFirestore();

    useEffect(() => {
        const fetchUserProfile = async () => {
            if (user && user.uid) {
                try {
                    const userRef = doc(db, 'users', user.uid);
                    const userSnap = await getDoc(userRef);
                    if (userSnap.exists()) {
                        const userData = userSnap.data();
                        setProfileData({
                            fullName: userData.fullName || 'User Name',
                            bio: userData.bio || 'No bio provided.',
                            occupation: userData.occupation || 'Occupation',
                            interests: userData.interests || []
                        });
                        setProfileImageUrl(userData.profileImageUrl || '');
                    } else {
                        console.log('No such document!');
                    }
                } catch (error) {
                    console.error('Error fetching user profile: ', error);
                }
            }
        };

        fetchUserProfile();
    }, [user, db]);

    const handleProfileImageUpload = (imageUrl) => {
        setProfileImageUrl(imageUrl);
    };

    return (
        <div className="profile-container">
            <div className="inner-container">
                <div className="profile-image">
                    <div>
                        <p>img here</p>
                    </div>
                </div>
                <div className="profile-description">
                    <div className="profile-bio">
                        <div className="about-me">
                            <div className="name-and-pronouns">
                                <h3 className="profile-heading">{profileData.fullName}</h3>
                                <h6>{user?.pronouns || 'they/them'}</h6>
                            </div>
                            <p className="profile-heading">{profileData.occupation}</p>
                        </div>
                    </div>
                    <div className="description">
                        <h4 className="profile-heading">About Me</h4>
                        <p className="description-paragraph">
                            {profileData.bio}
                        </p>
                    </div>
                </div>
                <div className="interests">
                    <div className="interest-add">
                        <h4 className="interest-heading profile-heading">What I Like</h4>
                        <svg width="15" height="15" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_66_29)">
                                <path d="M75 32.8125H53.125C52.1875 32.8125 51.5625 32.1875 51.5625 31.25V9.375C51.5625 4.2188 47.3437 0 42.1875 0C37.0313 0 32.8125 4.2188 32.8125 9.375V31.25C32.8125 32.1875 32.1875 32.8125 31.25 32.8125H9.375C4.2188 32.8125 0 37.0313 0 42.1875C0 47.3437 4.2188 51.5625 9.375 51.5625H31.25C32.1875 51.5625 32.8125 52.1875 32.8125 53.125V75C32.8125 80.1562 37.0313 84.375 42.1875 84.375C47.3437 84.375 51.5625 80.1562 51.5625 75V53.125C51.5625 52.1875 52.1875 51.5625 53.125 51.5625H75C80.1562 51.5625 84.375 47.3437 84.375 42.1875C84.375 37.0313 80.1562 32.8125 75 32.8125Z" fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_66_29">
                                    <rect width="84.375" height="84.375" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <ul className="interest-list">
                        {profileData.interests.length > 0 ? (
                            profileData.interests.map((interest, index) => (
                                <li key={index} className="interest-tag">
                                    <p>{interest}</p>
                                </li>
                            ))
                        ) : (
                            <li>No interests listed.</li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Profile;