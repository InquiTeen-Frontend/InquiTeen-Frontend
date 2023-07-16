import { Link } from "react-router-dom";
import { ContextAuth } from "../ProviderAuth/ContextAuth";
import { useContext, useState } from "react";
import Burger from "./HeaderComponents/Burger";
import menu from '../../assets/components/menu.svg'
import close from '../../assets/components/close.svg'


export default function Header(){
    const [ burgerStatus, setBurgerStatus ] = useState(false)
    const { state, dispatch } = useContext(ContextAuth)

    return(
         <header className="p-5 fixed top-0 w-screen bg-slate-100 flex items-center justify-around">
            <Link to={'/'}>
                <h1 style={{
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    backgroundImage: 'linear-gradient(to right, purple, blue)',
                    WebkitBackgroundImage: '-webkit-linear-gradient(right, purple, blue)',
                }}
                className="text-4xl font-bold"
                >
                    InquiTeen
                </h1>
            </Link>
            <div className="flex gap-3 items-center justify-center">
            {
            state.token?(      
            <button onClick={()=>setBurgerStatus(!burgerStatus)} className="z-10">
                <img src={burgerStatus?close:menu} width={30} alt="" />
            </button>
            ):
            (
            <>
                <Link className="p-1 rounded bg-purple-600 font-semibold text-lg" to={'/users/signup'}>Sign Up</Link>
                <Link className="text-slate-700 font-semibold text-lg" to={'/users/signin'}>Sign In</Link>
            </>
            )
            }
            </div>
            {
                burgerStatus&&<Burger state={state} dispatch={dispatch} setBurgerStatus={setBurgerStatus} />
            }
        </header>
    )
}