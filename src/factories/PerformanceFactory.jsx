import { useEffect, useState } from 'react';
import { USER_PERFORMANCE } from '../data/data';

function Translate(kind) {
  const kindTranslate = {
    'cardio': 'Cardio',
    'energy': 'Énergie',
    'endurance': 'Endurance',
    'strength': 'Force',
    'speed': 'Vitesse',
    'intensity': 'Intensité'
  };

  return kindTranslate[kind] || kind;
}

function PerformanceFactory({ userId }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const user = USER_PERFORMANCE.find(user => user.userId === Number(userId));
        
        if(user) {
            const userData = user.data.map(item => ({
                subject: Translate(user.kind[item.kind]),
                value: item.value,
            }));

            setData(userData);
        }
    }, [userId]);

    return { data };  // Retourner le JSON
}

export default PerformanceFactory;
