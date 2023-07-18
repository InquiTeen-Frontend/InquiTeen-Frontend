import Swal from "sweetalert2";
import { ContextAuth } from "../ProviderAuth/ContextAuth";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CopyLinkButton from "./CopyLinkButton/CopyLinkButton";

export default function ModalInformationUser(){
    const { state } = useContext(ContextAuth)

    return(
        <section className="flex items-center justify-around flex-col h-56 ">
                <h1 className="text-3xl">Welcome to InquiTeen <b>{state.username}</b></h1>
                <article className="w-96 rounded-lgflex items-center justify-center flex-col p-2 pt-5 text-slate-100" >
                    <div className="h-1/2 w-full flex items-center justify-center gap-2">
                        <CopyLinkButton />                       
                        <Link to={`/viewMessages/${state.username}`} className="bg-purple-600 text-white p-2 rounded">View own messages</Link >
                    </div>
                </article>
            </section>
    )
}