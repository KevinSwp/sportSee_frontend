import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ScoreFactory from '../../../factories/ScoreFactory';

import './score.scss';

function Score({ userId }) {
    const { percentage } = ScoreFactory({ userId });

    return (
        <div className='circle'>
            <p className='text'>Score</p>
            <div style={{ position: 'relative' }}>
            <div className='circleProgress' style={{ transform: 'scaleX(-1)' }}>
                    <CircularProgressbar
                        value={percentage}
                        styles={buildStyles({
                            pathColor: `rgba(255, 0, 0)`,
                            trailColor: '#FBFBFB',
                        })}
                    />
                </div>

                <div style={{ position: 'absolute', top: '30%', width: '100%', textAlign: 'center' }}>
                    <span className='pourcentage'>{`${percentage}%`}</span> <br />
                    <span style={{ fontSize: '1rem', color: 'black' }}>de votre <br /> 
                    objectif</span>
                </div>
            </div>
        </div>
    );
}

export default Score;
