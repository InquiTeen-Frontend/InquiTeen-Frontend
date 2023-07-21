import { Link } from "react-router-dom"
export default function NotFound (){
    return(
        <section className="w-full h-screen flex-col flex items-center justify-center align-center gap-3">
            <h1 className="text-7xl font-bold">404</h1>
            <h3 className="text-xl">Oops... Are you lost?</h3>
            <Link to={'/'} className="p-2 bg-green-500 rounded text-xl">Back to home here...</Link>
        </section>
    )
}