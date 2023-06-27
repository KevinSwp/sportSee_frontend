import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import CustomTooltip from './TooltipActivity';
import ActivityFactory from '../../../factories/ActivityFactory';  // Import your custom hook here

function Activity({ userId }) {
    // Use the custom hook here
    const { data, maxKg } = ActivityFactory({ userId });

    return (
        <BarChart width={800} height={200} data={data}>
            <Tooltip content={<CustomTooltip />} />
            <XAxis axisLine={false} tickLine={false} dataKey="name" />
            <YAxis axisLine={false} tickLine={false} yAxisId="left" orientation="right" domain={[0, 'dataMax']} ticks={Array.from({length: maxKg+1}, (_, i) => i)} />
            <YAxis yAxisId="right" orientation="right" hide={true} />
            <CartesianGrid stroke="#f5f5f5" strokeDasharray="0"/>
            <Bar yAxisId="left" dataKey="kg" fill="#000000" barSize={5} radius={[10, 10, 0, 0]} />
            <Bar yAxisId="right" dataKey="kCal" fill="#E60000" barSize={5} radius={[10, 10, 0, 0]} />
        </BarChart>
    );
}

export default Activity;
