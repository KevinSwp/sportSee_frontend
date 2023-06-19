import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { USER_MAIN_DATA } from '../../../data/data';

function Score({ userId }) {
    // Find user ID
    const user = USER_MAIN_DATA.find(u => u.id === parseInt(userId));

    // Get todayScarore as %
    const percentage = user ? user.todayScore * 100 : 0;

  return (
    <div style={{ width: '200px' }}>
        <CircularProgressbar
            // Progress bar
            value={percentage}
            // XX.XX% (toFixed(2) = deux 0)
            text={`${percentage.toFixed(2)}%`}
            styles={buildStyles({
                pathColor: `rgba(255, 99, 71, ${percentage / 100})`,
                textColor: 'black',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
            })}
        />
    </div>
  );
}

export default Score;

