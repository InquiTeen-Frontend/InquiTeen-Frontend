import { useParams } from "react-router-dom"
import { ContextAuth } from "../../components/ProviderAuth/ContextAuth"
import { useContext } from "react"
import useGet from "../../hooks/useGet"
import MessageCard from "./components/messageCard"
import CopyLinkButton from "../../components/common/CopyLinkButton/CopyLinkButton"
import Loader from "../../components/common/Loader/Loader"
import NothingToSee from "./components/NothingToSee"

export default function ViewMessages(){
    const { username } = useParams()
    const { state } = useContext(ContextAuth)
    const { data, loading} = useGet(`messages/${state.username}`, state.token)

   
    
    if(!data || loading ){
        return(
           <Loader />
        )
    }

    if(state.username !== username){
        return(
            <NothingToSee />
        )
    }

    const reverseData = Array.from(data).reverse()

    return(
        <section  style={{ background: 'linear-gradient(to bottom, rgb(126 34 206), rgb(206, 34, 156))'}} className="w-screen h-screen flex flex-col gap-3 pb-20 pt-32 pl-5 pr-5 overflow-y-scroll">
            
            {
            data.length === 0 ?(
                    <div className="mx-auto w-full mt-5 h-60 bg-white rounded-xl shadow-xl text-slate-700 p-2 flex items-center flex-col gap-3 justify-around">
                        <h1 className="text-4xl font-bold">Ups... {':('}</h1>
                        <div className="flex flex-col gap-4">
                            <h5>You dont have any messages yet!</h5>
                            <span>But <b>don't worry...</b></span>
                            <CopyLinkButton />
                        </div>
                    </div>
            ):(
                <>
                {
                    reverseData.map((data, index)=>(
                        <MessageCard data={data} key={index} />
                     ))
                }
                </>
            )
            }
        </section>
    )
}