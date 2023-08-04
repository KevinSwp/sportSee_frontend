// Import necessary modules from React and react-router-dom
import { useState, useEffect } from "react";
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
        // Construct the URL to fetch data from main.json depending on the userId
        const dataUrl = `/data/${userId}/main.json`;

        // Fetch data from main.json
        fetch(dataUrl)
            .then(response => {
                // If the response is not ok, throw an error
                if (!response.ok) {
                    throw new Error("HTTP error" + response.status);
                }
                // Otherwise, convert the response to JSON
                return response.json();
            })
            .then(json => {
                // Get the user from the data
                const user = json.data;

                // If the user exists and the user's ID matches the ID from the environment variable,
                // set the user's name to be the user's first name
                if (user && Number(user.userId) === Number(userId)) {
                    setUserName(user.userInfos.firstName);
                }

            })
            .catch(function (error) {
                console.error('An error occurred:', error);
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

