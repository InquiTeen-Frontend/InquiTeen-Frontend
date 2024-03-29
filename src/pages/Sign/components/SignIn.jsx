import { useRef } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import girl from '../../../assets/pages/girlSign.svg'

export default function SignIn({submit, loading}){
    const usernameRef = useRef(null)
    const passwordRef = useRef(null)
    const navigate = useNavigate()
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

    const handlerToSubmit = async(evt) =>{
        evt.preventDefault()
        const username = usernameRef.current.value
        const password = passwordRef.current.value

        const data = {
            username:username,
            password:password
        }

        const success = await submit(data, 'login')
        if(success){
            navigate('/')
        }
        
        
    }

    return(
        <div className="flex flex-col gap-5  w-full">
            <h1 className="text-4xl font-bold">Sign In</h1>
          
            <form action="" className="h-full flex gap-6 flex-col items-center justify-center" onSubmit={handlerToSubmit}>
                <div className="flex ustify-center items-center">
                        {/* Inputs */}
                        <div>
                            {
                            inputs.map((data, index)=>(
                                <div key={index} className="flex flex-col w-full pl-3 pr-3">
                                    <label htmlFor={data.placeholder} className="text-lg" >{data.label}:</label>
                                    <input ref={data.refference} className="p-1 rounded text-sm focus:outline-none text-slate-700" type={data.type} placeholder={data.placeholder} />
                                </div>
                            ))
                            }
                        </div>
                    <img src={girl} alt="" width={150} />
                </div>

                <div className="flex flex-col gap-3">
                    <button className="bg-violet-500 text-slate-100 rounded p-1" disabled={loading}>{loading?'Sign In...':'Sign In'}</button>
                    <span className="text-md text-slate-200">New user? <Link className="underline hover:text-slate-700" to={'/users/signup'} >Sign up here!</Link></span>
                </div>
            </form>
        </div>
    )
}

