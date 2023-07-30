// Import necessary modules from React and react-router-dom
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
// Import the main styles
import './main.scss';

// Main function component
function Main() {
    // Get the user ID from the environment variables
    const userId = process.env.REACT_APP_USER_ID;
    // Initialize userName state with an empty string
    const [userName, setUserName] = useState('');
    // Create a navigate function using react-router-dom
    const navigate = useNavigate();

    // Use the useEffect hook to run the following code when the component mounts or when userId or navigate change
    useEffect(() => {
        // Fetch data from main.json
        fetch("/data/main.json")
            .then(response => {
                // If the response is not ok, throw an error
                if (!response.ok) {
                    throw new Error("HTTP error" + response.status);
                }
                // Otherwise, convert the response to JSON
                return response.json();
            })
            .then(json => {
                // Find the user in the data
                // const user = json.data;
                const user = json.data.find(user => user.userId.toString() === userId);

                // If the user exists and the user's ID matches the ID from the environment variable,
                // set the user's name to be the user's first name
                if (user && user.userId.toString() === userId) {
                    setUserName(user.userInfos.firstName);
                } else {
                    // Otherwise, navigate to the 404 page
                    navigate('/404');
                }
            })
            .catch(function () {
                // If there was an error fetching or processing the data, navigate to the 404 page
                navigate('/404');
            });
    }, [userId, navigate]); // useEffect dependencies

    // Render the component
    return (
        <div>
            <h1 className='h1'>Bonjour <span className='userName'>{userName}</span></h1>
            <p className='text'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}

// Export the Main component as the default export
export default Main;
