// Import useState and useEffect hooks from the React library
import { useState, useEffect } from 'react';
// Import constant data (USER_MAIN_DATA) from a local file
import { USER_MAIN_DATA } from '../data/data';

/**
 * Function component useAsideFactory taking userId and key as arguments
 */
function useAsideFactory(userId, key) {
    // data state is initialized with a default value of 0 using useState hook
    const [data, setData] = useState(0);

    useEffect(() => {
        // Find user in USER_MAIN_DATA whose id matches with provided userId. Number() function converts userId to a number.
        const user = USER_MAIN_DATA.find(user => user.id === Number(userId));

        // If a user is found, update the data state with user's keyData based on the provided key
        if(user) {
            setData(user.keyData[key]);
        }
    // Adding userId and key as dependencies.
    }, [userId, key]);

    return data;
}

export default useAsideFactory;
