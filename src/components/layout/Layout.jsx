import Header from "../common/Header"

export default function Layout({children}){
    return(
        <div>
            <Header/>
            {children}
        </div>
    )
} 