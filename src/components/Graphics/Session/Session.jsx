import React from 'react';
import { LineChart, Line, XAxis, Tooltip, CartesianGrid } from 'recharts';
import useFetch from "../../../hooks/useFetch";
import CustomTooltip from './TooltipSession';
import SessionFactory, { SessionFactoryType } from '../../../factories/SessionFactory';

import './session.scss';

function Session({ userId }) {
    const fetchPath = process.env.REACT_APP_ENVIRONMENT === 'debug' ? `/data/${userId}/session.json` : `/user/${userId}/session`
    const fullFetchUrl = process.env.REACT_APP_HOST + fetchPath

    const { data: session, isLoading, isError } = useFetch(
        fullFetchUrl,
        SessionFactory,
        SessionFactoryType.API_V1,
        2500)

    if (isLoading) {
        return (
            <div className="load">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        )
    }

    if (isError) {
        return <p>Une erreur est survenue...</p>
    }

    return (
        <div className='line'>
            <p className='text'>Durée moyenne des <br /> sessions</p>
            <LineChart width={215} height={100} data={session.sessions} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="0 1" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} interval={0} tick={{ fill: 'white' }} padding={{ left: 20, right: 20 }}/>
                <Tooltip content={<CustomTooltip />} />
                <Line type="natural" dataKey="sessionLength" stroke="#fff" dot={false} />
            </LineChart>
        </div>
    );
}

export default Session;

