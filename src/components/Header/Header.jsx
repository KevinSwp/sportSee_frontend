// Importing necessary libraries and modules
import React, { useState, useEffect } from "react";
// Hook to access URL parameters
import { useParams } from "react-router-dom";
// Importing user data
import { USER_MAIN_DATA } from '../../data/data';
// Hook for navigation
import { useNavigate } from 'react-router-dom';
// Importing scss
import './header.scss';

/**
 *  Function Header component
 */
function Header () {
    // Get userId from the URL parameters
    const { userId } = useParams();
    // Creating a state variable for the userName with its setter function. "' '" initialized on empty
    const [userName, setUserName] = useState('');
    // Initializing the navigation hook
    const navigate = useNavigate();

    // Using the useEffect hook to fetch user data after component mount
    useEffect(() => {
        // Finding the user from the imported data based on URL param
        const user = USER_MAIN_DATA.find((user) => user.id === parseInt(userId));
        if (user) {
            // If the user exists, we set the userName state with the user's first name
            setUserName(user.userInfos.firstName);
        } else {
            // If the user does not exist, we redirect the user to the 404 page
            navigate('/404');
        }
    }, [userId, navigate]); // useEffect will re-run whenever userId or navigate changes

    // Rendered JSX
    return (
        <div>
            <h1 className='h1'>Bonjour <span className='userName'>{userName}</span></h1>
            <p className='text'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}

// Exporting the Header component as default
export default Header;
