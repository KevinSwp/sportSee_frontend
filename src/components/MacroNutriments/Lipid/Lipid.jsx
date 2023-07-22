// Import necessary libraries
import React, { useState, useEffect } from 'react';
// Import the SVG icon
import lipidIcone from './lipid-icon.svg';
// Import AsideFactory component
import useAsideFactory from '../../../factories/useAsideFactory';

function Lipid ({ userId }) {
    // Use the AsideFactory function to fetch the lipidCount
    const lipids = useAsideFactory(userId, 'lipidCount');

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (lipids !== 0) {
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [lipids]);

    return (
        <div className='bloc'>
            <div className='img'>
                <img src={lipidIcone} alt="#" />
            </div>
            <div className='text'>
                {isLoading ? (
                    <p>Chargement en cours...</p>
                ) : (
                    <>
                        <p className='nb'>{lipids}g</p>
                        <p>Lipides</p>
                    </>
                )}
            </div>
        </div>
    )
}

export default Lipid;
