import React from 'react';

function LoadingOrErrorComponent({ isLoading, isError }) {
    if (isLoading) {
        return (
            <div className="loader">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        );
    }
    
    if (isError) {
        return (
            <div className="loader">
                <p>Une erreur est survenue...</p>
            </div>
        );
    }
}

export default LoadingOrErrorComponent;
