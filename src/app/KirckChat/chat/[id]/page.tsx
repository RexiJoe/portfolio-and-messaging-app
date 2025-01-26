"use client"

import ChatMessage from "@/components/project1 components/ChatMessage"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { db, auth } from "@/firebase"
import { doc, collection, onSnapshot, query, orderBy, Timestamp} from "firebase/firestore"


type chatsSchema = {
    id: string,
    name: string,
    avatar: string,
    message: string,
    time: Timestamp,
    date: string,
    seen: boolean,
    sent: string,
    email: string
}


export default function ChatPage(){
    
    const [chats, setChats] = useState<chatsSchema[]>([])
    const pathname = usePathname()
    const segmentedPath = pathname.split("/")
    const collectionId = segmentedPath[segmentedPath.length - 1]
    
    useEffect(()=>{
        const unsubscribeAuth = auth.onAuthStateChanged((user)=>{
            async function getChat(){
                const email = user?.email
                const docRef = doc(db, email as string, "chats")
                const collRef = collection(docRef, collectionId) //coleccion de mensajes
                const q = query(collRef, orderBy("time", "desc"))
                
                const unsubscribeSnapshot = onSnapshot(q,(snapshot)=>{
                    const fetchedChats: chatsSchema[] = []

                    snapshot.forEach((doc)=>{
                        const data = doc.data() as chatsSchema
                        fetchedChats.push({...data, id: doc.id})
                        setChats(fetchedChats)  
                        // console.log(fetchedChats)
                    })
                })
                return ()=>{ unsubscribeSnapshot() }
            }
            getChat()
        })

        return ()=>{unsubscribeAuth()}
    },[])

    return(
    <div className="flex flex-col-reverse relative w-full h-full px-4 pb-2 gap-2 overflow-y-scroll scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent " >
        {chats.map(({message, name, id, email, time})=>{return <ChatMessage message={message} user={name} email={email} key={id} time={time} /> })}
    </div>
    )
}