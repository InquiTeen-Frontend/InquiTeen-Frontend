import { useRef } from "react"
import { Link } from "react-router-dom"

export default function SignIn({submit}){
    const usernameRef = useRef(null)
    const passwordRef = useRef(null)
    const inputs = [
        {
            label:'Username',
            type:'text',
            placeholder:'Yo username here ;)',
            refference:usernameRef
        },{
            label:'Password',
            type:'password',
            placeholder:'Your password?',
            refference:passwordRef
        },
    ]

    const handlerToSubmit = (evt) =>{
        evt.preventDefault()
        const username = usernameRef.current.value
        const password = passwordRef.current.value

        const data = {
            username:username,
            password:password
        }

        submit(data, 'login')
    }

    return(
        <div className="flex flex-col gap-5  w-full">
            <h1 className="text-4xl font-bold">Sign In</h1>
            <form action="" className="h-full flex gap-6 flex-col items-center justify-center" onSubmit={handlerToSubmit}>
                {
                inputs.map((data, index)=>(
                    <div key={index} className="flex flex-col w-full pl-3 pr-3">
                        <label htmlFor={data.placeholder} className="text-lg" >{data.label}:</label>
                        <input ref={data.refference} className="p-1 rounded text-sm focus:outline-none text-slate-700" type={data.type} placeholder={data.placeholder} />
                    </div>
                ))
                }
                <div className="flex flex-col gap-3">
                    <button className="bg-violet-500 text-slate-100 rounded p-1">Sign In</button>
                    <span className="text-md text-slate-200">New user? <Link className="underline hover:text-slate-700" to={'/users/signup'} >Sign up here!</Link></span>
                </div>
            </form>
        </div>
    )
}

