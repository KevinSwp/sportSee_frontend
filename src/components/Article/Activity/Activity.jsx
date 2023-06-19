// Importing necessary modules and components from React and Recharts
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
// Importing the user activity data
import { USER_ACTIVITY } from '../../../data/data';

/**
 * Function weight chart userId as props
 */
function Activity({ userId }) {
    // Using useState to store the data that will be displayed on the chart
    const [data, setData] = useState([]);
    const [maxKg, setMaxKg] = useState(0);


    // Using the useEffect hook, rerun effect if userId change
    useEffect(() => {
        // Find the user with userId in the user activity data
        const user = USER_ACTIVITY.find(user => user.userId === Number(userId));

        // If the user exists
        if(user) {
            // Prepare the user's data for the chart, using only the first 10 sessions with slice
            const userData = user.sessions.slice(0, 10).map((session, index) => ({ name: index + 1, kg: session.kilogram, kCal: session.calories }));

            // If the user has less than 10 sessions, we fill the remaining spots with empty data
            const fillerData = Array.from({ length: 10 - userData.length }, (_, i) => ({ name: i + userData.length + 1, kg: 0, kCal: 0 }));

            // Set the state variable 'data' to the prepared user data, including the filler data if necessary. "..." combine those two arrays data
            setData([...userData, ...fillerData]);

            // Calculate the maximum kg value in the data
            const dataMax = Math.max(...userData.map(item => item.kg));

            // Setting maxKg state to dataMax
            setMaxKg(dataMax);
        }
    }, [userId]);  // The useEffect hook is dependent on the userId prop

    return (
        <BarChart width={800} height={200} data={data}>
            <Tooltip />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" orientation="right" domain={[0, 'dataMax']} ticks={Array.from({length: maxKg+1}, (_, i) => i)} />
            <YAxis yAxisId="right" orientation="right" hide={true} />
            <CartesianGrid stroke="#f5f5f5" strokeDasharray="0"/>
            {/* <CartesianGrid stroke="#f5f5f5" strokeDasharray="0" strokeOpacity={0.5} /> */}
            <Bar yAxisId="left" dataKey="kg" fill="#000000" barSize={5} radius={[10, 10, 0, 0]} />
            <Bar yAxisId="right" dataKey="kCal" fill="#E60000" barSize={5} radius={[10, 10, 0, 0]} />
        </BarChart>
    );
}

export default Activity;
