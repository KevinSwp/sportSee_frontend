// Import necessary libraries and components
import React, { useEffect, useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
// Import the user performance data
import { USER_PERFORMANCE } from '../../../data/data';

/**
 * Function to translate
 */
function Translate(kind) {
  const kindTranslate = {
    'cardio': 'Cardio',
    'energy': 'Énergie',
    'endurance': 'Endurance',
    'strength': 'Force',
    'speed': 'Vitesse',
    'intensity': 'Intensité'
  };

  // Return translate if it exists, else return the original term
  return kindTranslate[kind] || kind;
}

/**
 * Function to display the performance
 */
function Performance({ userId }) {
  // Using useState to store the data that will be displayed on the chart
  const [data, setData] = useState([]);

  // Using the useEffect hook to load the data when the component is rendered and when userId changes
  useEffect(() => {
    // Find the user with userId in the user performance data
    const user = USER_PERFORMANCE.find(user => user.userId === Number(userId));
    
    // If the user exists
    if(user) {
      // Prepare the user's data for the chart
      const userData = user.data.map(item => ({
        // Translate the kind
        subject: Translate(user.kind[item.kind]),
        value: item.value,
      }));

      // Update the state with the new data
      setData(userData);
    }
  }, [userId]); // Effect depends on the userId prop

  return (
    <div>
      <RadarChart cx={125} cy={125} outerRadius={60} width={250} height={250} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <Radar dataKey="value" fill="red" fillOpacity={0.55} />
      </RadarChart>
    </div>
  );
}

export default Performance;
