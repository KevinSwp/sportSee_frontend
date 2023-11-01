import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';

import useFetch from "../../../hooks/useFetch";
import PerformanceFactory, { PerformanceFactoryType } from "../../../factories/PerformanceFactory";
import LoadingOrErrorComponent from '../../../utils/loader';

import './performance.scss';

function Performance({ userId }) {
    const fetchPath = process.env.REACT_APP_ENVIRONMENT === 'debug' ? `/data/${userId}/performance.json` : `/user/${userId}/performance`
    const fullFetchUrl = process.env.REACT_APP_HOST + fetchPath

    const { data: performance, isLoading, isError } = useFetch(
        fullFetchUrl,
        PerformanceFactory,
        PerformanceFactoryType.API_V1,
        2000)

    if (isLoading || isError) {
        return <LoadingOrErrorComponent isLoading={isLoading} isError={isError} />
    }

    return (
        <div className='radar'>
            <RadarChart cx={95} cy={100} outerRadius={60} width={190} height={190} data={performance.data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" stroke="white" tick={{ fontSize: 9 }} tickLine={false} axisLine={false} />
                <Radar dataKey="value" fill="#FF0101B2" fillOpacity={1} />
            </RadarChart>
        </div>
    );
}

export default Performance;
