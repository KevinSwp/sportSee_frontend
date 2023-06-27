import { useEffect, useState } from 'react';
import { USER_AVERAGE_SESSIONS } from '../data/data';

function getDayName(dayNumber) {
    const dayNames = [null,'L', 'M', 'M', 'J', 'V', 'S', 'D'];
    return dayNames[dayNumber];
}

function SessionFactory({ userId }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const userData = USER_AVERAGE_SESSIONS.find(user => user.userId === Number(userId));
  
        if (userData) {
            const mappedData = userData.sessions.map(session => ({
                ...session,
                day: getDayName(session.day),
            }));

            setData(mappedData);
        }
    }, [userId]);

    return { data };  // Retourner le JSON
}

export default SessionFactory;
