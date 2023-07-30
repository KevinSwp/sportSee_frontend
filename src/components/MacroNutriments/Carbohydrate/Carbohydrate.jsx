// Import necessary libraries
import React, { useState, useEffect } from 'react';
// Import the SVG icon
import carbIcone from './carbs-icon.svg';
// Import AsideFactory component
import useMainData from '../../../factories/useAsideFactory';

function Carbohydrate({ userId }) {
    // Use the AsideFactory function to fetch the carbohydrateCount
    const carbohydrates = useMainData(userId, 'carbohydrateCount');

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (carbohydrates !== 0) {
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 1500);

            return () => clearTimeout(timer);
        }
    }, [carbohydrates]);

    return (
        <div className='bloc' style={{ marginBottom: '2rem', marginTop: '2rem' }}>
            <div className='img'>
                <img src={carbIcone} alt="#" />
            </div>
            <div className='text'>
                {isLoading ? (
                    <div className="loaders">
                        <div className="dots"></div>
                        <div className="dots"></div>
                        <div className="dots"></div>
                    </div>
                ) : (
                    <>
                        <p className='nb'>{carbohydrates}g</p>
                        <p>Glucides</p>
                    </>
                )}
            </div>
        </div>
    )
}

export default Carbohydrate;
