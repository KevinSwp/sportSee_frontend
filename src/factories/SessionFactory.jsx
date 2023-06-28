// Importing necessary hooks from 'react' for maintaining state and side effects.
import { useEffect, useState } from 'react';
// Importing the user average sessions data.
import { USER_AVERAGE_SESSIONS } from '../data/data';

/**
 * Function that returns the abbreviated day name for a given day number.
 */
function getDayName(dayNumber) {
    // An array of abbreviated day names.
    // Not using index 0 with null.
    const dayNames = [null, 'L', 'M', 'M', 'J', 'V', 'S', 'D'];
    // Return the day name corresponding to the given day number.
    return dayNames[dayNumber];
}

/**
 * Function get data session
 */
function SessionFactory({ userId }) {
    // Initialize state for the data.
    const [data, setData] = useState([]);

    // Executed every time the userId prop changes.
    useEffect(() => {
        // Find the user with matching userId from USER_AVERAGE_SESSIONS data.
        const MainData = USER_AVERAGE_SESSIONS.find(user => user.userId === Number(userId));

        // If the user is found,
        if (MainData) {
            // Map the user's sessions data to a new format.
            const mappedData = MainData.sessions.map(session => ({
                // Keep the original session data,
                ...session,
                // but replace the day number with an abbreviated day name.
                day: getDayName(session.day),
            }));

            // Update the state with the prepared data.
            setData(mappedData);
        }
    }, [userId]); // re-run effect if userId changes.

    // Return the processed session data.
    return { data };
}

// Export the SessionFactory function as the default export.
export default SessionFactory;
