import { useParams } from "react-router-dom"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import { useState } from "react"
import { useContext } from "react"
import { ContextAuth } from "../../components/ProviderAuth/ContextAuth"
import { TYPES } from "../../components/ProviderAuth/Types"
import { envConfig } from "../../../env-config"

export default function Sign(){
    const { typesign } = useParams()
    const [ error, setError ] = useState(false)
    const [ loading, setLoading ] = useState(false)

    const { dispatch }= useContext(ContextAuth)
    const handlerSubmit = async(data, path ) => {  
        setLoading(true)
        try {
            const response = await fetch(`${envConfig.PORT_BACKEND}/users/${path}`,{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(data)
            })
            if(!response.ok){
                const message = await response.json()
                if(message){
                    setError(message)
                    setTimeout(()=>{
                        setError(false)
                    }, 3000)
                    setLoading(false)
                    return false
                }
                throw new Error
            }
            const responseJson = await response.json()

            dispatch({
                type:TYPES.ADD_DATA,
                payload:responseJson
            })
            setLoading(false)
            return true

        } catch (error) {
            setLoading(false)
            return false
        }
    }

    return(
        <main className="w-screen h-screen justify-center items-center flex bg-slate-700 p-5 flex-col">

            <div className=" w-full rounded-xl shadow-xl bg-slate-100 justify-center items-center text-slate-100 p-3 flex flex-col" style={{ background: 'linear-gradient(to bottom, rgb(126 34 206), rgb(206, 34, 156))' }}>
                <div className="flex items-center justify-center flex-col w-full">
                    {typesign==='signup'?<SignUp submit={handlerSubmit} loading={loading} setError={setError}/>:<SignIn loading={loading} submit={handlerSubmit} />}
                </div>
                <span className='font-semibold text-red-800 bg-white rounded'>{error&&error.message}</span>
            </div>
            
        </main>
    )
}