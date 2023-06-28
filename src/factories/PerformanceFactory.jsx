// Importing necessary hooks from 'react' for maintaining state and side effects.
import { useEffect, useState } from 'react';
// Importing the user performance data.
import { USER_PERFORMANCE } from '../data/data';

/**
 *  Function translates
 */
function Translate(kind) {
  const kindTranslate = {
    'cardio': 'Cardio',
    'energy': 'Énergie',
    'endurance': 'Endurance',
    'strength': 'Force',
    'speed': 'Vitesse',
    'intensity': 'Intensité'
  };

  // Return the translation of the given kind if it exists, otherwise return the original kind.
  return kindTranslate[kind] || kind;
}

/**
 * Function get data performance
 */
function PerformanceFactory({ userId }) {
    // Initialize state for the data.
    const [data, setData] = useState([]);

    // Executed every time the userId prop changes.
    useEffect(() => {
        // Find the user with matching userId from USER_PERFORMANCE data.
        const user = USER_PERFORMANCE.find(user => user.userId === Number(userId));
        
        // If the user is found,
        if(user) {
            // Map the user's performance data to a new format.
            const MainData = user.data.map(item => ({
                // Translate the kind.
                subject: Translate(user.kind[item.kind]),
                // Keep the value as is.
                value: item.value,
            }));

            // Update the state with the prepared data.
            setData(MainData);
        }
    }, [userId]); // re-run effect if userId changes.

    // Return the processed performance data.
    return { data };  // Return the JSON.
}

// Export the PerformanceFactory function as the default export.
export default PerformanceFactory;
