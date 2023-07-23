import { useState } from 'react'
import screenshot from '../../../assets/pages/screenshot.svg'
import ScreenshotMode from './ScreenshotMode'
export default function MessageCard({data}){

    const [ open, setOpen ] = useState(false)

    const getRandomEmoji = (arr) =>{
        const lengthEmojis = arr.length
        const emoji = Math.floor(Math.random()*lengthEmojis)
        return arr[emoji]
    }

    return(
        <article className="w-full h-fit bg-slate-100 shadow-xl text-slate-600 rounded p-2 flex flex-col gap-2">
            <span className="flex items-center justify-start gap-2"><span className="text-4xl">{getRandomEmoji(emojis)}</span>
                <span className="underline text-lg">{data.from}</span>
            </span>
            <p className='text-xl'>{data.message}</p>
            <div className="p-2 flex justify-end" style={{borderTop:'1px solid rgba(0,0,0,0.1)'}}>
                {/* Add handler for screenshot mode */}
                    <button className="bg-purple-600 p-1 rounded text-white flex items-center gap-2" onClick={()=>setOpen(!open)}>
                        <img src={screenshot} width={30} alt="" />
                        <span>Screenshot mode</span>
                    </button>
                    {open&&<ScreenshotMode data={data} setOpen={setOpen} />}
            </div>
        </article>
    )
}

const emojis = [ "😄", "😆", "😂", "🤣", "😊", "😍", "🤩", "😋", "🤪", "😜",
    "😎", "🥳", "🤗", "😇", "🥰", "😛", "😝", "🤑", "🤓", "😏",
    "😈", "👻", "🤖", "🎃", "🦄", "🐿️", "🐧", "🦁", "🐸", "🐢",
    "🦕", "🦖", "🍄", "🍔", "🍕", "🍦", "🍩", "🍿", "🎂", "🍰",
    "🍭", "🍪", "🍓", "🍉", "🥝", "🍌", "🍆", "🥔", "🥞", "🍟",
    "🍔", "🥪", "🍿", "🍕", "🍝", "🌮", "🍱", "🍛", "🍜", "🍣",
    "🍤", "🍙", "🍚", "🥘"]