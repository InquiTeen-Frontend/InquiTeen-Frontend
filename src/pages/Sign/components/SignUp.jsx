import { useRef } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function SignUp({submit, setError}){
    const usernameRef = useRef(null)
    const passwordRef = useRef(null)
    const repeatPasswordRef = useRef(null)
    const navigate = useNavigate()
    const inputs = [
        {
            label:'Instagram username',
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

        if(password!==repeatPassword || password === null){
            setError({
                message:'You have differents passwords.'
            })
            return
        }

        const data = {
            username:username,
            password:password
        }
        const success = await submit(data, 'register')
        if(success){
            navigate('/users/signin')
            return
        }
    }
    return(
        <div className="flex flex-col gap-5 w-full">
            <h1 className="text-4xl font-bold">Sign Up</h1>
            <form action="" className="h-full flex gap-3 flex-col items-center justify-center w-full pr-3 pl-3" onSubmit={handlerToSubmit}>
                {
                inputs.map((data, index)=>(
                    <div key={index} className="flex flex-col w-full">
                        <label className="text-lg" htmlFor={data.placeholder}>{data.label}:</label>
                        <input ref={data.refference} className="p-1 text-slate-700 rounded text-sm focus:outline-none" type={data.type} placeholder={data.placeholder} />
                    </div>
                ))
                }
                <div className="flex flex-col gap-3">
                    <button className="bg-violet-500 text-slate-100 rounded p-1">Sign Up</button>
                    <span className="text-md text-slate-200">Have an account? <Link className="underline hover:text-slate-100" to={'/users/signin'}>Sign In here!</Link></span>
                </div>
            </form>
        </div>
    )
}

