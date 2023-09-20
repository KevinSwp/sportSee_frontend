import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import CustomTooltip from './TooltipActivity';
import { ReferenceLine } from 'recharts';

import useFetch from "../../../hooks/useFetch";
import ActivityFactory, { ActivityFactoryType } from "../../../factories/ActivityFactory"

import './activity.scss';

function Activity({ userId }) {

    const fetchPath = process.env.REACT_APP_ENVIRONMENT === 'debug' ? `/data/${userId}/activity.json` : `/user/${userId}/activity`
    const fullFetchUrl = process.env.REACT_APP_HOST + fetchPath

    const { data: activity, isLoading, isError } = useFetch(
        fullFetchUrl,
        ActivityFactory,
        ActivityFactoryType.API_V1,
        1500)


    if (isLoading) {
        return (
            <div className="loader">
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
        <div className='bar'>
            <div className='infoActivity'>
                <p className="daily_activity">Activité quotidienne</p>
                <div className='kg_kCal'>
                    <p className='poids'><span className='bulletPtPds'>•</span>Poids (kg)</p>
                    <p><span className='bulletPtKcal'>•</span>Calories brûlées (kCal)</p>
                </div>
            </div>
            <BarChart width={600} height={180} data={activity.data}>
                <Tooltip content={<CustomTooltip />} />
                <ReferenceLine yAxisId="left" y={0} stroke="black" strokeDasharray="1 0" />
                <XAxis axisLine={{ stroke: 'rgba(255,255,255,1)' }} strokeDasharray="0" tickLine={false} dataKey="name" margin={{ left: 0 }} />
                <YAxis axisLine={false} dy={20} tickLine={false} yAxisId="left" orientation="right" domain={[0, 'dataMax']} ticks={Array.from({ length: activity.maxKg + 1 }, (_, i) => i)} />
                <YAxis yAxisId="right" dx={20} orientation="right" hide={true} />
                <CartesianGrid stroke="#f5f5f5" strokeDasharray="0" />
                <Bar yAxisId="left" dataKey="kg" fill="#000000" barSize={5} radius={[10, 10, 0, 0]} />
                <Bar yAxisId="right" dataKey="kCal" fill="#E60000" barSize={5} radius={[10, 10, 0, 0]} />
            </BarChart>
        </div>
    );
}

export default Activity;
