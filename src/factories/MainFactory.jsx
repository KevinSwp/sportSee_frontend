import { useState, useEffect } from "react";
import { USER_MAIN_DATA } from "../data/data";

function MainData(userId) {
    // data state is initialized with a default value of null
    const [data, setData] = useState(null);

    useEffect(() => {
        // Find user in USER_MAIN_DATA whose id matches with provided userId. 
        const user = USER_MAIN_DATA.find((user) => user.id === parseInt(userId));

        // If a user is found, update the data state with user's data
        if(user) {
            setData(user);
        }
    // Adding userId as dependency.
    }, [userId]);

    return data;
}

export default MainData;
