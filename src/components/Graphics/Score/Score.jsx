import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import useFetch from "../../../hooks/useFetch";
import ScoreFactory, {ScoreFactoryType } from '../../../factories/ScoreFactory';

import './score.scss';

function Score({ userId }) {
    const fetchPath = process.env.REACT_APP_ENVIRONMENT === 'debug' ? `/data/score.json` : `/user/${userId}/score`
    const fullFetchUrl = process.env.REACT_APP_HOST + fetchPath

    const { data: score, isLoading, isError } = useFetch(
        fullFetchUrl,
        ScoreFactory,
        ScoreFactoryType.API_V1,
        4000)

    if(isLoading) {
        return <p>Chargement en cours...</p>
    }

    if(isError){
        return <p>Une erreur est survenue...</p>
    }

    return (
        <div className='circle'>
            <p className='text'>Score</p>
            <div style={{ position: 'relative' }}>
                <div className='circleProgress' style={{ transform: 'scaleX(-1)' }}>
                    <CircularProgressbar
                        value={score.todayScore}
                        styles={buildStyles({
                            pathColor: `rgba(255, 0, 0)`,
                            trailColor: '#FBFBFB',
                        })}
                    />
                </div>

                <div style={{ position: 'absolute', top: '30%', width: '100%', textAlign: 'center' }}>
                    <span className='pourcentage'>{`${score.todayScore}%`}</span> <br />
                    <span style={{ fontSize: '1rem', color: 'black' }}>de votre <br /> 
                    objectif</span>
                </div>
            </div>
        </div>
    );
}

export default Score;
