import { useEffect, useState } from "react";
import { envConfig } from "../../env-config";

export default function useGet(path, token){
    const [ error, setError ] = useState(false)
    const [ loading, setLoading ] = useState(false)
    const [ data, setData ] = useState(false)

    const fetchData = async() =>{
        setLoading(true)
        try {
            const response = await fetch(`${envConfig.PORT_BACKEND}/${path}`, {
                method:"GET",
                headers:{
                    'access-token':token
                }
            })
            const responseMessage = await response.json()

            if(!response.ok){
                if(responseMessage.message){
                    setError(responseMessage)
                    return
                }
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