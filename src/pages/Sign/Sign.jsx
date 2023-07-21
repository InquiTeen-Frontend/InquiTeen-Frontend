import { useParams } from "react-router-dom"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import girl from '../../assets/pages/girlSign.svg'
import { useState } from "react"
import { useContext } from "react"
import { ContextAuth } from "../../components/ProviderAuth/ContextAuth"
import { TYPES } from "../../components/ProviderAuth/Types"

export default function Sign(){
    const { typesign } = useParams()
    const [ error, setError ] = useState(false)

    const { dispatch }= useContext(ContextAuth)
    const handlerSubmit = async(data, path ) => {  
        try {
            const response = await fetch(`http://192.168.0.214:3000/users/${path}`,{
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
                    }, 2000)
                    return false
                }
                throw new Error
            }
            const responseJson = await response.json()

            dispatch({
                type:TYPES.ADD_DATA,
                payload:responseJson
            })
            return true

        } catch (error) {
            return false
        }
    }

    return(
        <main className="w-screen h-screen justify-center items-center flex bg-slate-700">

            <div className="rounded-xl shadow-xl bg-slate-100 justify-center items-center text-slate-100 p-3 flex flex-col" style={{ background: 'linear-gradient(to bottom, rgb(126 34 206), rgb(206, 34, 156))' }}>
                <div className="flex items-center justify-center flex-col">
                    {typesign==='signup'?<SignUp submit={handlerSubmit} setError={setError}/>:<SignIn submit={handlerSubmit} />}
                    <img src={girl} alt="" width={300} />
                </div>
                <span className='font-semibold text-white'>{error&&error.message}</span>
            </div>
            
        </main>
    )
}