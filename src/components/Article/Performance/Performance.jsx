import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import PerformanceFactory from '../../../factories/PerformanceFactory';

import './performance.scss';

function Performance({ userId }) {
    const { data } = PerformanceFactory({ userId });

    return (
        <div className='radar'>
            <RadarChart cx={110} cy={110} outerRadius={70} width={215} height={215} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" stroke="white" tick={{ fontSize: 9 }}/>
                <Radar dataKey="value" fill="red" fillOpacity={0.55} />
            </RadarChart>
        </div>
    );
}

export default Performance;
