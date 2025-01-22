"use client"

import { useRef, useEffect, useState } from "react"

export default function ChatTextBar(){

    const textareaRef = useRef<HTMLTextAreaElement>(null)

    const [hasValue, setHasValue] = useState<string>("")

    useEffect(()=>{
        const textarea = textareaRef.current

        if(textarea){
            textarea.addEventListener("input",()=>{
                textarea.style.height = "28px"
                textarea.style.height = textarea.scrollHeight + "px"
                const value = textarea.value

                setHasValue(value)

            })
        }
    },[])

    return(
        <div className="w-full py-2 px-2 gap-2 flex items-center justify-between sticky bottom-0 border-t bg-[#170D30] border-slate-800 " >
            <div className="flex grow w-1/2 min-h-12 items-center rounded-3xl gap-2 px-2 bg-slate-700" >
                <span className="material-symbols-rounded cursor-pointer flex items-center justify-center text-2xl h-12 self-end" >sentiment_satisfied</span>
                <textarea ref={textareaRef} className="flex grow h-7 max-h-72 w-1/2 text-white text-xl scrollbar-none resize-none bg-transparent outline-none caret-violet-500 placeholder:text-gray-400" placeholder="Message" />
                <span className="material-symbols-rounded cursor-pointer flex items-center justify-center text-2xl h-12 self-end" >attach_file</span>
                <span className="material-symbols-rounded cursor-pointer flex items-center mr-1 justify-center text-2xl h-12 self-end" >photo_camera</span>
            </div>
            <span className="material-symbols-rounded cursor-pointer flex items-center justify-center w-12 h-12 text-2xl text-[#170D30] bg-violet-500 rounded-full icon-fill" >{hasValue ? "send" : "mic"}</span>
        </div>
    )
}