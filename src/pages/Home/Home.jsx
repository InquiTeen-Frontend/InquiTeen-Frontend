import { ContextAuth } from "../../components/ProviderAuth/ContextAuth";
import { useContext } from "react";
import CopyLinkButton from "../../components/common/CopyLinkButton/CopyLinkButton";
import { Link } from "react-router-dom";

export default function Home(){
    const { state } = useContext(ContextAuth)

    return(
        <main className="bg-white w-screen pb-20 flex pt-20" style={{ background: 'linear-gradient(to bottom, rgb(126 34 206), rgb(206, 34, 156))' }}>
            <section className="mt-5 pl-4 flex flex-col gap-12 pr-4">
                <div className="flex flex-col gap-6">
                    <h1 className="text-6xl font-bold">What is InquiTeen? 👀</h1>
                    <p className="text-xl"><b>InquiTeen</b> is an anonymous question page for users curious about what they think of themselves! 😋</p>
                </div>
                <div className="flex flex-col gap-6">
                    <h3 className="text-4xl font-bold">How to use it?</h3>
                    <p className="text-lg">It&apos;s simple to use! Copy the link to send you messages, to make it easier we leave it here below 😏</p>
                    <CopyLinkButton />
                    <p className="text-lg">
                    And that&apos;s it! <b className="underline">Share it on the networks so everyone can send you secrets without fear!</b> 
                    </p>
                    <b className="text-5xl">Ready?</b>
                    <Link to={!state.username?`/users/signin`:`/viewMessages/${state.username}`} className="shadow-xl bg-slate-100 text-purple-700 p-2 rounded flex justify-around">
                        View your messages here! 🤩
                    </Link >
                </div>
                
            </section>
        </main>
    )
}