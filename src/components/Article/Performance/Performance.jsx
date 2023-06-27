import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import PerformanceFactory from '../../../factories/PerformanceFactory';   // Import your custom hook here

function Performance({ userId }) {
    // Use the custom hook here
    const { data } = PerformanceFactory({ userId });

    return (
        <div>
            <RadarChart cx={125} cy={125} outerRadius={60} width={250} height={250} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <Radar dataKey="value" fill="red" fillOpacity={0.55} />
            </RadarChart>
        </div>
    );
}

export default Performance;
