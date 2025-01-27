"use client"

import { usePathname } from "next/navigation"
import { Timestamp } from "firebase/firestore"
// import { useEffect, useState } from "react"

type chatSchema = {
    message: string,
    user: string,
    email: string,
    time: Timestamp
}

export default function ChatMessage({message, email, time}: chatSchema){

    const pathname = usePathname()
    const segmentedPath = pathname.split("/")
    const id = segmentedPath[segmentedPath.length - 1]
    let date = ""
    
    if(time !== null){
        date = time.toDate().toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"})
    }else{
        date = "no time"
    }


    return(
        <div className={`flex justify-end items-center ${email !== id ? "self-end bg-purple-900" : "bg-slate-700"} gap-2 w-fit max-w-64 px-2 py-1 rounded-lg`} >
            <div className="flex flex-wrap w-fit h-fit gap-2 text-white" >
                {message}
                <p className="flex grow items-end min-w-fit justify-end text-xs font-medium text-gray-400" >{date}</p>
            </div>
        </div>
    )
}