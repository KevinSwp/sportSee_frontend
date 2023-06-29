import React, {useEffect, useState} from 'react'

function useFetch() {

    const [data, setData] = useState()

    useEffect(() => {
        fetch('http://localhost:3000/data/activity.json')
        .then(response => response.json())
        .then(response => setData(response.data))
    }, [])

    return 
}

export default useFetch