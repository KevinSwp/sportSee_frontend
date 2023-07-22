import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';

import useFetch from "../../../hooks/useFetch";
import PerformanceFactory, { PerformanceFactoryType } from "../../../factories/PerformanceFactory";

import './performance.scss';

function Performance({ userId }) {
    const fetchPath = process.env.REACT_APP_ENVIRONMENT === 'debug' ? `/data/performance.json` : `/user/${userId}/performance`
    const fullFetchUrl = process.env.REACT_APP_HOST + fetchPath

    const { data: performance, isLoading, isError } = useFetch(
        fullFetchUrl,
        PerformanceFactory,
        PerformanceFactoryType.API_V1,
        3000)
  
    if(isLoading) {
        return <p>Chargement en cours...</p>
    }

    if(isError){
        return <p>Une erreur est survenue...</p>
    }

    return (
        <div className='radar'>
            <RadarChart cx={110} cy={110} outerRadius={70} width={215} height={215} data={performance.data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" stroke="white" tick={{ fontSize: 9 }}/>
                <Radar dataKey="value" fill="red" fillOpacity={0.55} />
            </RadarChart>
        </div>
    );
}

export default Performance;