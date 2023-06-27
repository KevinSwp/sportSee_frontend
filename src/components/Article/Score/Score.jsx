import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ScoreFactory from '../../../factories/ScoreFactory';  // Import your custom hook here

function Score({ userId }) {
    // Use the custom hook here
    const { percentage } = ScoreFactory({ userId });

    return (
        <div>
            <CircularProgressbar
                value={percentage}
                text={`${percentage}%`} 
                styles={buildStyles({
                    pathColor: `rgba(255, 0, 0)`,
                    textColor: 'black',
                    textSize : '0.5rem',
                })}
            />
        </div>
    );
}

export default Score;
