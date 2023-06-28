// Importing necessary hooks from 'react' for maintaining state and side effects.
import { useEffect, useState } from 'react';
// Importing the user activity data.
import { USER_ACTIVITY } from '../data/data';

/**
 * Function get data activity
 */
function ActivityFactory({ userId }) {
    // Initialize state for the data and maxKg.
    const [data, setData] = useState([]);
    const [maxKg, setMaxKg] = useState(0);

    // Executed every time the userId prop changes.
    useEffect(() => {
        // Find the user with matching userId from USER_ACTIVITY data.
        const user = USER_ACTIVITY.find(user => user.userId === Number(userId));
        
        // If the user is found,
        if(user) {
            // Prepare the main data from the user's first 10 sessions.
            // Map the sessions to an object with properties name, kg, and kCal.
            const MainData = user.sessions.slice(0, 10).map((session, index) => ({ name: index + 1, kg: session.kilogram, kCal: session.calories }));

            // If the user has less than 10 sessions, fill the remaining with zero data.
            const fillerData = Array.from({ length: 10 - MainData.length }, (_, i) => ({ name: i + MainData.length + 1, kg: 0, kCal: 0 }));

            // Merge the main data and filler data and update the state.
            setData([...MainData, ...fillerData]);

            // Find the maximum kilograms from the main data and update the state.
            const dataMax = Math.max(...MainData.map(item => item.kg));
            setMaxKg(dataMax);
        }
    }, [userId]); // re-run effect if userId changes.

    // Return the processed data and maximum kilograms lifted by the user.
    return { data, maxKg };
}

// Export the ActivityFactory function as the default export.
export default ActivityFactory;
