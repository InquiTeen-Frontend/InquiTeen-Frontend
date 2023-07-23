import 'animate.css'

export default function ScreenshotMode({data, setOpen}){
    return(
        <div className='w-full h-full fixed flex items-center justify-center bg-white top-0 right-0' style={{
            background:"rgba(0,0,0,.5)",
            backdropFilter:'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)'
        }}
        onClick={()=>{setOpen(false)}}
        >
            <article className='animate__fadeIn animate__animated fixed w-96 bg-white rounded-3xl shadow-xl'>
                <div className='w-full text-white p-5 flex items-center justify-center bg-slate-600 rounded-t-3xl'>
                    <h4 className='text-xl font-semibold'>{data.from}</h4>
                </div>
                <div className='flex flex-col  gap-1 bg-white rounded-b-3xl p-4 flex items-center justify-center'>
                    <p className='text-lg'>{data.message}</p>
                    <div className='flex items-center justify-end w-full'>
                        <span style={{
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                            backgroundImage: 'linear-gradient(to right, purple, blue)',
                            WebkitBackgroundImage: '-webkit-linear-gradient(right, purple, blue)',
                            }}
                            className='font-semibold'
                            >
                        InquiTeen
                        </span>
                    </div>
                </div>
            </article>
        </div>
    )
}