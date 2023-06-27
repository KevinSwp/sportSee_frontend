import { useEffect, useState } from 'react';
import { USER_MAIN_DATA } from '../data/data';

function ScoreFactory({ userId }) {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const user = USER_MAIN_DATA.find(users => users.id === parseInt(userId));
        const userScore = user ? user.todayScore * 100 : 0;
        
        setPercentage(userScore);
    }, [userId]);

    return { percentage };  // Retourner le JSON
}

export default ScoreFactory;
