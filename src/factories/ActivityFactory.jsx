import { useEffect, useState } from 'react';
import { USER_ACTIVITY } from '../data/data';

function ActivityFactory({ userId }) {
    const [data, setData] = useState([]);
    const [maxKg, setMaxKg] = useState(0);

    useEffect(() => {
        const user = USER_ACTIVITY.find(user => user.userId === Number(userId));
        
        if(user) {
            const userData = user.sessions.slice(0, 10).map((session, index) => ({ name: index + 1, kg: session.kilogram, kCal: session.calories }));
            const fillerData = Array.from({ length: 10 - userData.length }, (_, i) => ({ name: i + userData.length + 1, kg: 0, kCal: 0 }));

            setData([...userData, ...fillerData]);

            const dataMax = Math.max(...userData.map(item => item.kg));
            setMaxKg(dataMax);
        }
    }, [userId]);

    return { data, maxKg };
}

export default ActivityFactory;
