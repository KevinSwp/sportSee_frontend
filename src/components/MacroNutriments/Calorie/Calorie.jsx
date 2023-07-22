// Import React library and hooks
import React, { useState, useEffect } from 'react';
// Import the SVG icon
import calorieIcone from './calories-icon.svg';
// Import the custom hook useAsideFactory from the factories directory
import useAsideFactory from '../../../factories/useAsideFactory';

// Define a functional component Calories that receives a userId as prop
function Calories({ userId }) {
    // Define a local state variable isLoading with initial value true
    // This is used to manage the loading state of the component
    const [isLoading, setIsLoading] = useState(true);

    // Use the custom hook useAsideFactory to fetch the calorie count for the user
    // The returned value will update as the hook fetches data
    const calories = useAsideFactory(userId, 'calorieCount');

    // Define a side effect that runs when the calories state variable changes
    useEffect(() => {
        // If calories is not 0, it means that data has been fetched
        if (calories !== 0) {
            // Use setTimeout to delay setting the loading state to false
            // This is to simulate a loading delay
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 1000);

            // Return a cleanup function to clear the timeout when the component unmounts
            // or before the next time the effect runs
            return () => clearTimeout(timer);
        }
    // Provide calories as a dependency for the effect, so the effect runs whenever calories changes
    }, [calories]);

    // Render the component
    return (
        <div className='bloc'>
            <div className='img'>
                <img src={calorieIcone} alt="#" />
            </div>
            <div className='text'>
                {/* Use a conditional rendering to either display a loading message or the actual calorie count */}
                {isLoading ? (
                    <p>Chargement en cours...</p>
                ) : (
                    <>
                        <p className='nb'>{calories}kCal</p>
                        <p>Calories</p>
                    </>
                )}
            </div>
        </div>
    )
}

// Export the Calories component as default export
export default Calories;
