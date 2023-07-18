export default function MessageCard({data, handlerAddComment}){
    return(
        <article className="w-full h-fit bg-slate-100 shadow-xl text-slate-600 rounded p-2 flex flex-col gap-2">
            <span>From: <span className="underline">{data.from}</span></span>
            <p>{data.message}</p>
            <div className="p-1" style={{borderTop:'1px solid rgba(0,0,0,0.1)'}}>
                <div className="w-full flex items-center justify-center flex-col gap-3">
                    <details className="h-fit h-max-32 overflow-y-scroll self-start w-full">
                        <summary>View comments {`[${data.comments.length}]`}</summary>
                        <ul className="flex flex-col h-max-20 gap-2 items-start pl-4 justify-center">
                            {
                            data.comments.map((comments, index)=>{
                                return(
                                    <li key={index} className="border w-full break-words">{comments.from}:{comments.message}</li>
                                )
                            })
                            }
                        </ul>
                    </details>
                    
                    <form action="" className="flex text-white w-full text-slate-600" onSubmit={(e)=>{
                        e.preventDefault()
                        handlerAddComment(e, data._id)
                        }
                    }>
                        <input type="text" placeholder="Add new comment" className="p-1 w-full" />
                        <button className="bg-purple-700 text-white rounded pl-2 pr-2">{'>'}</button>
                    </form>
                </div>
            </div>
        </article>
    )
}