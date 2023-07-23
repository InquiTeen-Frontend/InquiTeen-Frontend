import { Link, useNavigate } from "react-router-dom"
import ModalInformationUser from "../ModalInformationUser"
import { TYPES } from "../../ProviderAuth/Types"

export default function Burger({state, dispatch, setBurgerStatus}){
    const navigate = useNavigate()
    const handlerLogout = () => {
        dispatch({
            type:TYPES.DELETE_DATA
        })
        navigate('/users/signin')
        setBurgerStatus(false)
    }
    

    return(
        <section className="w-screen h-5/6 fixed top-20 flex justify-start p-3 items-center flex-col" style={{WebkitBackdropFilter:'blur(10px)',backdropFilter:'blur(10px)', background:'rgba(0,0,0,0.7)'}} >
            <ModalInformationUser setBurgerStatus={setBurgerStatus} />
            <Link onClick={()=>{setBurgerStatus(false)}} to={`/settings/${state.username}`} className="w-full flex items-center justify-center p-2 text-2xl" style={{borderTop:'.5px solid white', borderBottom:'.5px solid white'}}>Settings</Link>
            <button className="text-slate-100 bg-purple-600 p-3 rounded mt-4" onClick={handlerLogout}>LOGOUT</button>
        </section>
    )
}
