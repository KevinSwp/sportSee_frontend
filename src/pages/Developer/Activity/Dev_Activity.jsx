import React , {useState} from "react"
import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

function Activity () {
    const { userId } = useParams();

    const { data, isLoading, isError } = useFetch(`http://localhost:3000/data/activity.json`)

    if(isLoading) {
        return <p>Chargement en cours...</p>
    }

    if(isError){
        return <p>Une erreur est survenue...</p>
    }

    return <>{JSON.stringify(data)}</>
}

export default Activity
