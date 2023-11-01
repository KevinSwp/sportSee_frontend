import React from 'react';
import { LineChart, Line, XAxis, Tooltip, CartesianGrid, Rectangle } from 'recharts';
import useFetch from "../../../hooks/useFetch";
import CustomTooltip from './TooltipSession';
import SessionFactory, { SessionFactoryType } from '../../../factories/SessionFactory';
import useHover from './useHover';
import LoadingOrErrorComponent from '../../../utils/loader';

import './session.scss';

function Session({ userId }) {
    const fetchPath = process.env.REACT_APP_ENVIRONMENT === 'debug' ? `/data/${userId}/session.json` : `/user/${userId}/session`
    const fullFetchUrl = process.env.REACT_APP_HOST + fetchPath

    const { data: session, isLoading, isError } = useFetch(
        fullFetchUrl,
        SessionFactory,
        SessionFactoryType.API_V1,
        2500)

    const { handleMouseMove, handleMouseLeave, /*gradientOffset*/ } = useHover(session);

    if (isLoading || isError) {
        return <LoadingOrErrorComponent isLoading={isLoading} isError={isError} />
    }

    const CustomCursorArea = ({ points }) => {
        return (
          <Rectangle
            fill="#000000"
            opacity={0.1}
            x={points[0].x}
            width={300}
            height={350}
          />
        );
      };

    return (
        <div className='line'>
            <p className='text'>Durée moyenne des <br /> sessions</p>
            <LineChart width={190} height={110} data={session.sessions} margin={{ top: 0, right: 0, left: 0, bottom: 0 }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#fff" stopOpacity={0.30} />
                        {/* <stop offset={gradientOffset()} stopColor="#fff" stopOpacity={1} /> */}
                        <stop offset="100%" stopColor="#fff" stopOpacity={1} />
                    </linearGradient>
                </defs>

                <CartesianGrid strokeDasharray="0 1" />

                <XAxis dataKey="day" axisLine={false} tickLine={false} interval={0} tick={{ fill: 'white', opacity: 0.7, fontSize: '0.6rem' }} padding={{ left: 10, right: 10 }} />

                <Tooltip content={<CustomTooltip />} cursor={<CustomCursorArea />} />

                <Line
                    type="natural"
                    dataKey="sessionLength"
                    isAnimationActive={true}
                    animationEasing="ease-in-out"
                    animationDuration={1500}
                    stroke="url(#colorUv)"
                    strokeWidth={1.5}
                    dot={false}
                    
                    activeDot={{
                        stroke: 'rgba(255, 255, 255, 0.2)',
                        strokeWidth: 10,
                        r: 5,
                        fill: 'white',
                    }}
                />
            </LineChart>
        </div>
    );
}

export default Session;

