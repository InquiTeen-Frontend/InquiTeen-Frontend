import { ContextAuth } from "../../components/ProviderAuth/ContextAuth";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Home(){

    const { state } = useContext(ContextAuth)
    return(
        <main className="bg-white w-screen h-screen flex " style={{ background: 'linear-gradient(to bottom, rgb(126 34 206), rgb(206, 34, 156))' }}>
            {/* Make component */}
            
            {/* Other component */}
            <section className="w-4/6 h-full flex-col flex items-start justify-start p-5 pt-32 overflow-y-scroll text-slate-700 gap-5">
                    <article className="w-5/6 rounded p-2 bg-slate-100 shadow-lg gap-3 flex flex-col border">
                        <span>From: sdasd to <span className="underline cursor-pointer">userRandom</span></span>
                        <div className="p-2">
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nulla quis hic quia cum laborum, fugit, aperiam itaque iusto ipsam blanditiis mollitia culpa accusantium, sint nesciunt repudiandae consequatur ea corporis?</span>
                        </div>
                    </article>
            </section>
        </main>
    )
}