import { useEffect, useState } from "react";

export default function useGet(path, token){
    const [ error, setError ] = useState(false)
    const [ loading, setLoading ] = useState(false)
    const [ data, setData ] = useState(false)

    const fetchData = async() =>{
        setLoading(true)
        try {
            const response = await fetch(`http://localhost:3000/${path}`, {
                method:"GET",
                headers:{
                    'x-access-token':token
                }
            })
            const responseMessage = await response.json()
            if(!response.ok){
                console.log(responseMessage)
                throw new Error
            }
            setData(responseMessage)
            setLoading(false)
            setError(false)
        } catch (error) {
            setError(error)
            setLoading(false)
        }
    }
    
    useEffect(()=>{
        fetchData()
    }, [path])
    return { data, loading, error, fetchData }
} 