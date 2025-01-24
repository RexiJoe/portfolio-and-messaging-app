"use client"

import ChatMessage from "@/components/project1 components/ChatMessage"

type chatSchema = {
    message: string,
    user: string
}

const chats: chatSchema[] = [
    {message: "Hola, que tal?", user: "marcita"},
    {message: "bien y tu?", user: "joseph"},
    {message: "todo bien :)", user: "marcita"},
]

export default function ChatPage(){
    return(
    <div className="flex flex-col-reverse relative w-full h-full px-4 pb-2 gap-2 overflow-y-scroll scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent " >
        {chats.reverse().map(({message, user})=>{return <ChatMessage message={message} user={user} key={message} /> })}
    </div>
    )
}