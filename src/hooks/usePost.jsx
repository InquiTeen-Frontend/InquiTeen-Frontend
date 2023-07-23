import { useState } from "react"
import { envConfig } from "../../env-config";

export default function usePost(){
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(false)
    const [ response, setResponse ] = useState([])

    const handlerSubmit = async(path, body, token, method) => {
        setLoading(true)
        try {
            const response = await fetch(`${envConfig.PORT_BACKEND}/${path}`,{
                method:method||'POST',
                headers:{
                    'Content-Type': 'application/json',
                    'access-token':token || null
                },
                body:JSON.stringify(body)
            })
            const message = await response.json()
            if(!response.ok){
                if(message?.message){
                    setError(message)
                    setTimeout(()=>{
                        setError(false)
                    }, 4000)
                    setLoading(false)
                    return
                }
                throw new Error
            }
            setResponse(message)
            setLoading(false)
        } catch (error) {
            setError({message:'An error unexpected'})
            setLoading(false)
        }
    }

    return { error, loading, handlerSubmit, response}
}