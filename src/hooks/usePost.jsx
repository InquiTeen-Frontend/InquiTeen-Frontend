import { useState } from "react"

export default function usePost(){
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(false)
    const [ response, setResponse ] = useState([])

    const handlerSubmit = async(path, body, token) => {
        setLoading(true)
        try {
            const response = await fetch(`http://192.168.0.214:3000/${path}`,{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                    'x-access-token':token || null
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
        } catch (error) {
            setError({message:'An error unexpected'})
            setLoading(true)           
        }
    }

    return { error, loading, handlerSubmit, response}
}