import { Link } from "react-router-dom"
export default function NothingToSee(){
    return(
        <section className="w-full h-screen flex items-center justify-center p-4">
            <div className="flex gap-10 flex-col">
                <h1 className="align-center text-4xl font-bold">You don't have to see anything here! 🤨</h1>
                <Link to={'/'} className="text-xl p-1 bg-green-500 rounded flex items-center justify-center">Back home here...</Link>
            </div>
        </section>
    )
}