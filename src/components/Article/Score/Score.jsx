import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { USER_MAIN_DATA } from '../../../data/data';

function Score({ userId }) {
    // Find user ID
    const user = USER_MAIN_DATA.find(users => users.id === parseInt(userId));

    // Get todayScore as %
    const percentage = user ? user.todayScore * 100 : 0;

  return (
    <div>
        <CircularProgressbar
            // Progress bar
            value={percentage}
            
            text={`${percentage}%`} 

            styles={buildStyles({
                pathColor: `rgba(255, 0, 0)`,
                textColor: 'black',
                textSize : '0.5rem',
            })}
        />
    </div>
  );
}

export default Score;

