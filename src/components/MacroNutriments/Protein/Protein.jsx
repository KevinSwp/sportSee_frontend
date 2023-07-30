// Import necessary libraries
import React, { useState, useEffect } from 'react';
// Import the SVG icon
import proteinIcone from './protein-icon.svg';
// Import AsideFactory component
import useAsideFactory from '../../../factories/useAsideFactory';

function Protein({ userId }) {
    // Use the AsideFactory function to fetch the proteinCount
    const proteins = useAsideFactory(userId, 'proteinCount');

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (proteins !== 0) {
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 1500);

            return () => clearTimeout(timer);
        }
    }, [proteins]);

    return (
        <div className='bloc' style={{ marginTop: '2rem' }}>
            <div className='img'>
                <img src={proteinIcone} alt="#" />
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
                        <p className='nb'>{proteins}g</p>
                        <p>Protéines</p>
                    </>
                )}
            </div>
        </div>
    )
}

export default Protein;
