import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import useFetch from "../../../hooks/useFetch";
import ScoreFactory, { ScoreFactoryType } from '../../../factories/ScoreFactory';
import LoadingOrErrorComponent from '../../../utils/loader';

import './score.scss';

function Score({ userId }) {
    const fetchPath = process.env.REACT_APP_ENVIRONMENT === 'debug' ? `/data/${userId}/score.json` : `/user/${userId}/score`
    const fullFetchUrl = process.env.REACT_APP_HOST + fetchPath

    const { data: score, isLoading, isError } = useFetch(
        fullFetchUrl,
        ScoreFactory,
        ScoreFactoryType.API_V1,
        3000)

    if (isLoading || isError) {
        return <LoadingOrErrorComponent isLoading={isLoading} isError={isError} />
    }

    return (
        <div className='circle'>
            <p className='text'>Score</p>
            <div style={{ position: 'relative' }}>
                <div className='circleProgress' style={{ transform: 'scaleX(-1)' }}>
                    <CircularProgressbar
                        value={score.todayScore}
                        strokeWidth={6}
                        styles={buildStyles({
                            pathColor: `rgba(255, 0, 0)`,
                            trailColor: '#FBFBFB',
                        })}
                    />
                </div>

                <div className='pourcentageCircle'>
                    <div className='pourcentagePadding'>
                        <span className='pourcentage'>{`${score.todayScore}%`}</span> <br />
                        <span style={{ fontSize: '0.8rem', color: '#74798C', fontWeight:'bold' }}>de votre <br />
                            objectif</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Score;
