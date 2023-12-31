import React from "react"
import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import PerformanceFactory, { PerformanceFactoryType } from "../../../factories/PerformanceFactory";

function Performance () {
    const { userId } = useParams();

    const fetchPath = process.env.REACT_APP_ENVIRONMENT === 'debug' ? `/data/${userId}/performance.json` : `/user/${userId}/performance`
    const fullFetchUrl = process.env.REACT_APP_HOST + fetchPath

    const { data, isLoading, isError } = useFetch(
        fullFetchUrl,
        PerformanceFactory,
        PerformanceFactoryType.API_V1)

    if(isLoading) {
        return <p>Chargement en cours...</p>
    }

    if(isError){
        return <p>Une erreur est survenue...</p>
    }

    return <pre>{JSON.stringify(data, null, 2)}</pre>
}

export default Performance;
