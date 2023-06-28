// Importing necessary hooks from 'react' for maintaining state and side effects.
import { useEffect, useState } from 'react';
// Importing the main user data.
import { USER_MAIN_DATA } from '../data/data';

/**
 * Function get data score
 */
function ScoreFactory({ userId }) {
    // Initialize state for the percentage.
    const [percentage, setPercentage] = useState(0);

    // Executed every time the userId prop changes.
    useEffect(() => {
        // Find the user with matching userId from USER_MAIN_DATA.
        const user = USER_MAIN_DATA.find(users => users.id === parseInt(userId));

        // If the user is found, calculate the score as a percentage,
        // otherwise, set the score to 0.
        const userScore = user ? user.todayScore * 100 : 0;
        
        // Update the state with the calculated score.
        setPercentage(userScore);
    }, [userId]); // re-run effect if userId changes.

    // Return the score percentage.
    return { percentage };
}

// Export the ScoreFactory function as the default export.
export default ScoreFactory;
