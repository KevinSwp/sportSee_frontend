import React, {useEffect, useState} from 'react'
import TestFactory from '../factories/TestFactory'

function useFetch(url) {

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(response => response.json())
            .then(response => {
                const objectTest = new TestFactory(response.data, 'api_v1');
                setData(objectTest)
                setIsLoading(false)
            })
        }, 2000)
    }, [url])

    return {data, isLoading, isError}
}

export default useFetch