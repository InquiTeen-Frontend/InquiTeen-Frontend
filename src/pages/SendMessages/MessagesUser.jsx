import { useParams } from "react-router-dom"
import { useRef, useState } from "react"
import Swal from "sweetalert2"
import dice from '../../assets/components/dice.svg'
import { getRandomName } from "./utils"
import { envConfig } from "../../../env-config"
import { useNavigate } from "react-router-dom"

export default function MessagesUser(){
    const { username } = useParams()
    const nameRef = useRef('')
    const messageRef = useRef('')
    const [ valueName, setValueName ] = useState('Anon ☠️')
    const inputs = [
        {
        label:'How do you want to be seen?',
        placeholder:'anonymous name',
        refference:nameRef,
        type:'text',
        value:valueName
        },
        {
        label:'Message',
        placeholder:"How about something like... I'm afraid to talk to you! You are cute!",
        refference:messageRef,
        type:'textarea'
        },
    ]
    const [ error, setError ] = useState(false)
    const navigate = useNavigate()

    const handlerSubmit = async(e) =>{
        e.preventDefault()
        const message = messageRef.current.value
        const to = username
        const from = nameRef.current.value

        const data = {
            message:message,
            to:to,
            from:from
        }
        const response = await fetch(`${envConfig.PORT_BACKEND}/messages/newMessage`,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(data)
        })

        try {
            if(!response.ok){
                const message = await response.json()
                if(message?.message){
                    setError(message)
                    setTimeout(()=>{
                        setError(false)
                    }, 4000)
                    return
                }
                throw new Error
            }
            Swal.fire({
                icon:'success',
                title:'Message sended ;)',
                showConfirmButton:false,
                timer:2500,
                timerProgressBar:true
            }).then(()=>{
                navigate('/')
            })
        } catch (error) {
            Swal.fire({
                icon:'error',
                title:'Whoops... Try again later.',
                showConfirmButton:false,
                timer:2000,
                timerProgressBar:true
            })
        }
    }

    return(
        <main className="w-screen h-screen bg-purple-700 flex items-center justify-center" style={{ background: 'linear-gradient(to bottom, rgb(126 34 206), rgb(206, 34, 156))' }}>
            <article className="h-96 w-96 gap-7 bg-slate-100 rounded-xl bg-white shadow-xl text-slate-700 flex flex-col items-center justify-center">
                <div className="w-full">
                    <h1 className="text-center text-2xl decoration-underline">Send a anonymous message to:<br/> <b className="text-xl">{username}</b></h1>
                </div>
                <form action="" onSubmit={handlerSubmit} className="w-full flex items-center p-6 gap-3 flex-col justify-around h-1/2 ">
                    {
                    inputs.map((data, i )=>(
                        <div key={i} className="flex flex-col items w-full">
                            <label htmlFor={data.type} className="text-lg" >{data.label}</label>
                            {data.type!=='text'?
                                <textarea ref={data.refference} placeholder={data.placeholder} className="border p-1 focus:outline-purple-400" rows='2' cols='30'/>
                                :
                                (
                                <div className="flex gap-2">
                                    <input className="p-1 w-5/6 border focus:outline-purple-400" type={data.type} placeholder={data.placeholder} ref={data.refference} value={data.value} onChange={(e)=>setValueName(e.target.value)} />
                                    <button className="p-1 border rounded-xl flex items-center justify-center" type='button' onClick={()=>setValueName(getRandomName)}>
                                        <img src={dice} width={30} alt="" />
                                    </button>
                                </div>
                                )
                        }
                        </div>
                    ))
                    }
                    <button type="submit" className="p-1 bg-purple-700 text-white rounded font-bold self-center p-2 text-xl">Send {';)'}</button>
                </form>
                {error&&<span className="text-red-600 font-semibold">{error.message}</span>}
            </article>
        </main>
    )
}