import React from 'react';

/**
 * 
 */
const useHover = (session) => {
    const [hoverIndex, setHoverIndex] = React.useState(null);

    /**
     * 
     */
    const handleMouseMove = (e) => {
        if (e) {
            setHoverIndex(e.activeTooltipIndex);
        }
    };

    /**
     * 
     */
    const handleMouseLeave = () => {
        setHoverIndex(null);
    };

    /**
     * 
     */
    const gradientOffset = () => {
        
        if (!session.sessions.length || hoverIndex === null || hoverIndex >= session.sessions.length || hoverIndex < 0) {
            return '0%';
        }

        const dataMax = Math.max(...session.sessions.map(item => item.sessionLength));
        const dataMin = Math.min(...session.sessions.map(item => item.sessionLength));

        if (typeof session.sessions[hoverIndex] === 'undefined') {
            return '0%';
        }

        const offset = (session.sessions[hoverIndex].sessionLength - dataMin) / (dataMax - dataMin);

        return `${100 * offset}%`;
    };

    return {
        hoverIndex,
        handleMouseMove,
        handleMouseLeave,
        gradientOffset
    }
}

export default useHover;
