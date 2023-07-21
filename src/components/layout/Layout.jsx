import Header from "../common/Header"

export default function Layout({children}){
    return(
        <div style={{ background: 'linear-gradient(to bottom, rgb(126 34 206), rgb(206, 34, 156))' }} className="w-full h-screen">
            <Header/>
            {children}
        </div>
    )
} 