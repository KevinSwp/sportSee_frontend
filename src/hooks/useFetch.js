// Import useEffect and useState hooks from the React library
import { useEffect, useState } from 'react';

/**
 * Define a custom hook called useFetch
 */
function useFetch(url, Factory, type, timer = 1000) {
    // Initialize state variables with useState
    // data holds the fetched data, initially set to null
    const [data, setData] = useState(null);
    // isLoading indicates whether the fetch request is in progress, initially set to true
    const [isLoading, setIsLoading] = useState(true);
    // isError indicates whether an error occurred, initially set to false
    const [isError, setIsError] = useState(false);

    // fetch data from the API
    useEffect(() => {
        // setTimeout is used to delay the fetch request by timer milliseconds
        // The ID returned by setTimeout is saved to timeoutId
        const timeoutId = setTimeout(() => {
            // fetch is used to make the request to the provided url
            fetch(url)
                .then(response => {
                    // If the response is not ok, throw an error
                    if (!response.ok) {
                        throw new Error(`Error: ${response.statusText}`);
                    }
                    // If the response is ok, parse it as JSON
                    return response.json();
                })
                .then(response => {
                    // The parsed response is passed to the Factory function
                    // The result is saved to data using the setData function
                    const objectTest = new Factory(response.data, type);
                    setData(objectTest);
                    // Since the fetch request completed successfully, isLoading is set to false
                    setIsLoading(false);
                })
                .catch(error => {
                    // If an error occurs, set isError to true and log the error to the console
                    setIsError(true);
                    setIsLoading(false);
                    console.error(error);
                });
        }, timer);

        // The function returned by useEffect is called when the component is unmounted
        // or when a dependency changes
        // It clears the timeout using the timeoutId, which avoids a potential setState on an unmounted component
        return () => clearTimeout(timeoutId);
    }, [url, Factory, type, timer]); // All external variables used in the useEffect hook are included in the dependencies array

    // The custom hook returns an object with the data, isLoading, and isError state variables
    return { data, isLoading, isError };
}

// Export the useFetch hook as a default export
export default useFetch;
