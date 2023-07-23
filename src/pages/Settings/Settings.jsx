import { ContextAuth } from "../../components/ProviderAuth/ContextAuth"
import { useContext, useState } from "react"
import { useRef } from "react"
import resetButton from '../../assets/pages/reset.svg'
import usePost from "../../hooks/usePost"
import 'animate.css'
import { useNavigate } from "react-router-dom"
import { TYPES } from "../../components/ProviderAuth/Types"
import ErrorModal from "../../components/common/ErrorModal/ErrorModal"
import { checkUsername } from "../../utils/checkUsername"

export default function Settings(){
    const { state, dispatch } = useContext(ContextAuth)
    const {handlerSubmit, response, error, loading } = usePost()
    const nameRef = useRef(null)
    const passwordRef = useRef(null)
    const newPasswordRef = useRef(null)
    const navigate = useNavigate()
    const [ changeName, setChangeName ] = useState(null)
    const [ errorName, setErrorName ] = useState(false)

    const handlerCheck = async(evt) =>{
        const value = evt.target.value
        if(value===''|| value === state.username) return

        if(nameRef.current.value === value){
            if(!checkUsername(nameRef.current.value)){
                setErrorName({message:`Can't use space or special characters :(`})
                return
            }else{
                setErrorName(false)
            }
            handlerSubmit('users/checkData', {type:'username', _id:state.id, data:nameRef.current.value}, state.token )
            return
        }
        if(passwordRef.current.value === value) {
            handlerSubmit('users/checkData', {type:'password', _id:state.id, data:passwordRef.current.value}, state.token) 
            return
        }
    }

    const handlerUpload = async(e) =>{
        e.preventDefault()
        if(!response.success){
            return
        }

        const newPassword = newPasswordRef?.current?.value || null
        try {
            await handlerSubmit('users/modifyData', {newUsername:nameRef.current.value, newPassword:newPassword, _id:state.id}, state.token, 'PUT')
            
        } catch (error) {
            console.log(error)
        }
        dispatch({
            type:TYPES.DELETE_DATA
        })
        navigate('/users/signin')
    }

    if(error?.message){
        return <ErrorModal title={'Error :('} text={error.message.includes('jwt')?'Your session has expired 😣':error.message} icon='error' />
    }

    return(
        <section className="w-full h-screen flex justify-center items-center p-5">
            <article className="w-full h-fit rounded-xl bg-slate-100 text-slate-700 p-3 flex flex-col gap-4">
                <h1 className="font-bold text-3xl">Settings</h1>
                <span>Change what you need :{')'}</span>

                <form action="" className="flex flex-col p-2 gap-5" onSubmit={(e)=>handlerUpload(e)} >

                    <div className="flex flex-col">
                        <label htmlFor="" className="font-semibold">Do you wanna change your username?</label>
                        <div className="flex items-center gap-3">
                            <div className="w-full">
                                <input onBlur={(e)=>handlerCheck(e)} ref={nameRef} onChange={(e)=>setChangeName(e.target.value)} className={`p-1 w-full ${(response.success===false&&response.type==='username')&&'bg-red-200'} rounded`} type="text" value={changeName===null?state.username:changeName} />

                                <span className="animate__fadeIn animate__animated text-red-500">{errorName&&errorName.message}</span>
                            </div>

                            <button className="bg-white p-1 rounded" onClick={()=>nameRef.current.value=state.username} type="button">
                                <img width={30} src={resetButton} alt="" />
                            </button>
                        </div>
                    </div>
                    
                    <div className="flex flex-col">
                        <label htmlFor="" className="font-semibold">Or your password?</label>
                        <input onBlur={(e)=>handlerCheck(e)} ref={passwordRef} className={`p-1 w-full ${(response.success===false&&response.type==='password')&&'bg-red-200'} rounded`} placeholder="Enter your old password" type="password" />
                    </div>
                    {
                    response.success===true&&response.type==='password'&&
                        <div className="flex flex-col animate__fadeIn animate__animated">
                            <label htmlFor="" className="font-semibold">New password heree!</label>
                            <input ref={newPasswordRef} className={`p-1 bg-white w-full rounded`} placeholder="Enter your new password ;)" type="password" />
                        </div>
                    }
                    <span className="text-slate-400">*Any changes require a re-login</span>
                    <div className="flex w-full justify-around items-center">
                        <button type="reset" className="p-1 bg-slate-100 rounded text-red-500 text-lg">Discard</button>
                        <button className={`${!loading && response.success?'bg-purple-600':'bg-slate-500'} p-1 rounded text-slate-100 text-lg`}type="submit">{loading?'Checking...':'Save'}</button>
                    </div>
                </form>
            </article>
        </section>
    )
}