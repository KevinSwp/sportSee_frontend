import React from 'react';
import { LineChart, Line, XAxis, Tooltip, CartesianGrid } from 'recharts';
import CustomTooltip from './TooltipSession';
import SessionFactory from '../../../factories/SessionFactory';

import './session.scss';

function Session({ userId }) {
    const { data } = SessionFactory({ userId });

    return (
        <div className='line'>
            <p className='text'>Durée moyenne des <br/> sessions</p>
            <LineChart width={215} height={100} data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0}}>
                <CartesianGrid strokeDasharray="0 1"/>
                <XAxis dataKey="day" axisLine={false} tickLine={false} interval={0}/>
                <Tooltip content={<CustomTooltip />}/>
                <Line type="natural" dataKey="sessionLength" stroke="#fff" dot={false}/> 
            </LineChart>
        </div>
    );
}

export default Session;
