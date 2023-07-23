import { useRef } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import girl from '../../../assets/pages/girlSign.svg'
import Swal from "sweetalert2"
import { checkUsername } from "../../../utils/checkUsername"

export default function SignUp({submit, setError, loading}){
    const usernameRef = useRef(null)
    const passwordRef = useRef(null)
    const repeatPasswordRef = useRef(null)
    const navigate = useNavigate()
    const inputs = [
        {
            label:'Social username',
            type:'text',
            placeholder:'Use one that you know!',
            refference:usernameRef
        },{
            label:'Password',
            type:'Password',
            placeholder:'Uhm... New password?',
            refference:passwordRef
        },
        {
            label:'Repeat password',
            type:'password',
            placeholder:'Repeat here :)',
            refference:repeatPasswordRef
        },
    ]
    const handlerToSubmit = async(evt) =>{
        evt.preventDefault()
        const username = usernameRef.current.value
        const password = passwordRef.current.value
        const repeatPassword = repeatPasswordRef.current.value

        if(!checkUsername(username)){
            setError({message:`Can't use space or special characters :(`})
            return
        }else if(password!==repeatPassword || password === null){
            setError({
                message:'You have differents passwords.'
            })
            return
        }

        const data = {
            username:username,
            password:password
        }

        setError(false)
        const success = await submit(data, 'register')
        if(success){
            Swal.fire({
                title:'Registered ;)',
                text:'You will be redirected in 2 seconds...',
                timer:2500,
                timerProgressBar:true,
                background:'#8BC34A',
                position:'bottom',
                backdrop:'none',
                color:'white',
                showConfirmButton:false
            }).then(()=>{
                navigate('/users/signin')
            })
            return
        }
    }
    return(
        <div className="flex flex-col gap-5 w-full">
            <h1 className="text-4xl font-bold">Sign Up</h1>
            <form action="" className="h-full flex gap-3 flex-col items-center justify-center w-full pr-3 pl-3" onSubmit={handlerToSubmit}>
                <div className="flex">
                    <div className="flex flex-col gap-2">
                        {
                        inputs.map((data, index)=>(
                            <div key={index} className="flex flex-col w-full">
                                <label className="text-lg" htmlFor={data.placeholder}>{data.label}:</label>
                                <input ref={data.refference} className="p-1 text-slate-700 rounded text-sm focus:outline-none" type={data.type} placeholder={data.placeholder} />
                            </div>
                        ))
                        }
                    </div>
                    <img src={girl} width={170} alt="" />
                </div>
                <div className="flex flex-col gap-3">
                    <button className="bg-violet-500 text-slate-100 rounded p-1" disabled={loading}>{loading?'Sign Up...':'Sign Up'}</button>
                    <span className="text-md text-slate-200">Have an account? <Link className="underline hover:text-slate-100" to={'/users/signin'} onClick={()=>{setError(false)}} >Sign In here!</Link></span>
                </div>
            </form>
        </div>
    )
}

