// Importing necessary components from React and Recharts
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, Tooltip, CartesianGrid } from 'recharts';
// Importing user average sessions data
import { USER_AVERAGE_SESSIONS } from '../../../data/data';
// Importing a custom tooltip component
import CustomTooltip from './TooltipSession';

// Defining a Session component
function Session({ userId }) {
  // Initializing state variable for storing user session data
  const [data, setData] = useState([]);
  
  // useEffect hook to run when userId changes
  useEffect(() => {
    /**
     * Function to convert day number to day name
     */
    function getDayName(dayNumber) {
      const dayNames = [null,'L', 'M', 'M', 'J', 'V', 'S', 'D'];
      return dayNames[dayNumber];
    }

    // Find the user with the given userId
    const userData = USER_AVERAGE_SESSIONS.find(user => user.userId === Number(userId));
  
    // If user data exists
    if (userData) {
      // Map the data to replace the day number with the day name (Recreate array)
      const mappedData = userData.sessions.map(session => ({
        // Destructure to get all object's props with "..."
        ...session,
        day: getDayName(session.day),
      }));

      // Update data state with the mapped user data
      setData(mappedData);
    }
  }, [userId]);  // useEffect dependency array
  
  return (
    <LineChart width={260} height={250} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5}}>
      {/* Displaying a grid for the chart */}
      <CartesianGrid strokeDasharray="0 1"/> 
      {/* Setting 'day' as the dataKey for the X-Axis */}
      <XAxis dataKey="day" axisLine={false} tickLine={false}/> 
      {/* Setting the content for the Tooltip */}
      <Tooltip content={<CustomTooltip />}/> 
      {/* Displaying the line chart */}
      <Line type="natural" dataKey="sessionLength" stroke="#8884d8" dot={false} /> 
    </LineChart>
  );
}

export default Session;
