"use client"

import ChatCard from "@/components/project1 components/ChatCard";
import WsLists from "@/components/project1 components/WsLists";
import { auth, db } from "@/firebase"
import { useEffect, useState } from "react";
import { collection, doc, onSnapshot, orderBy, query, Timestamp} from "firebase/firestore";

type chatsSchema = {
    id: string,
    name: string,
    img: string,
    time: Timestamp,
    email: string

}

export default function Project1(){

    const [chats, setChats] = useState<chatsSchema[]>([])

    useEffect(()=>{
        
        
        auth.onAuthStateChanged((user)=>{
            const email = user?.email as string
            const docRef = doc(db, email, "chats")
            const collRef = collection(docRef, "chatlist")
            const q = query(collRef, orderBy("time", "asc"))
    
            const unsubscribeSnapshot = onSnapshot(q, (snapshot)=>{
            const fetchedChats: chatsSchema[] = []
            snapshot.forEach((doc)=>{
                const data = doc.data() as chatsSchema
                fetchedChats.push({...data, id: doc.id})
                setChats(fetchedChats)
                })
            })
            return ()=>{ unsubscribeSnapshot() }
        })

    },[])
    
    
    return(

        <div className="flex flex-col w-full grow overflow-y-scroll scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent" >
            <WsLists/>
            {
                chats.map((chat)=>{ return <ChatCard name={chat.name} email={chat.email} img={chat.img} time={chat.time} key={chat.id} /> })
            }
        </div>

    )
}