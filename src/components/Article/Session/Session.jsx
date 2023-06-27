import React from 'react';
import { LineChart, Line, XAxis, Tooltip, CartesianGrid } from 'recharts';
import CustomTooltip from './TooltipSession';
import SessionFactory from '../../../factories/SessionFactory'; // Import your custom hook here

function Session({ userId }) {
    // Use the custom hook here
    const { data } = SessionFactory({ userId });

    return (
        <LineChart width={260} height={250} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5}}>
            <CartesianGrid strokeDasharray="0 1"/> 
            <XAxis dataKey="day" axisLine={false} tickLine={false}/> 
            <Tooltip content={<CustomTooltip />}/> 
            <Line type="natural" dataKey="sessionLength" stroke="#8884d8" dot={false} /> 
        </LineChart>
    );
}

export default Session;
