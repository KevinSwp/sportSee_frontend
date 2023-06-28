import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import CustomTooltip from './TooltipActivity';
import ActivityFactory from '../../../factories/ActivityFactory';

import './activity.scss';

function Activity({ userId }) {
    const { data, maxKg } = ActivityFactory({ userId });

    return (
        <div className='bar'>
            <div className='infoActivity'>
                <p>Activité quotidienne</p>
                <div className='kg_kCal'>
                    <p className='poids'><span className='bulletPtPds'>•</span>Poids (kg)</p>
                    <p><span className='bulletPtKcal'>•</span>Calories brûlées (kCal)</p>
                </div>
            </div>
            <BarChart width={700} height={180} data={data}>
                <Tooltip content={<CustomTooltip />} />
                <XAxis axisLine={false} tickLine={false} dataKey="name" />
                <YAxis axisLine={false} tickLine={false} yAxisId="left" orientation="right" domain={['dataMax']} ticks={Array.from({length: maxKg+1}, (_, i) => i)} />
                <YAxis yAxisId="right" orientation="right" hide={true} />
                <CartesianGrid stroke="#f5f5f5" strokeDasharray="0"/>
                <Bar yAxisId="left" dataKey="kg" fill="#000000" barSize={5} radius={[10, 10, 0, 0]} />
                <Bar yAxisId="right" dataKey="kCal" fill="#E60000" barSize={5} radius={[10, 10, 0, 0]} />
            </BarChart>
        </div>
    );
}

export default Activity;
