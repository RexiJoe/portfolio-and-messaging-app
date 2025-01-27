"use client"

import { useRef, useState } from "react"
import { usePathname } from "next/navigation"
import { doc, getDoc, collection, addDoc, serverTimestamp, Timestamp, setDoc, updateDoc } from "firebase/firestore"
import { db, auth } from "@/firebase"

type chatsSchema = {
    name: string,
    avatar: string,
    message: string,
    time: Timestamp,
    date: Timestamp,
    sent: Timestamp,
    seen: boolean,
    email: string
}

export default function ChatTextBar(){

    const pathname = usePathname()
    const segmentedPath = pathname.split("/")
    const remitentId = segmentedPath[segmentedPath.length - 1]
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const [value, setValue] = useState<string>("")
    
    async function addToChats(){

        const contRef = doc(db, remitentId, "user")
        const data = await getDoc(contRef)
        const userData = data.data()

        const user = auth.currentUser
        const email = user?.email as string
        const docRef = doc(db, email, "chats")
        const chatListColl = collection(docRef, "chatlist")
        const chatlistDocRef = doc(chatListColl, remitentId)
        const chatlistDoc = await getDoc(chatlistDocRef,)
        // const chatId = remitentId.replace(".com", "")

        if(!chatlistDoc.exists()){
            setDoc(chatlistDocRef, {...userData, time: serverTimestamp(), message: value})
        }else{
            updateDoc(chatlistDocRef,{...userData, time: serverTimestamp(), message: value} )
        }

        const remitDocRef = doc(db, remitentId, "chats")
        const remitChatlistColl = collection(remitDocRef, "chatlist")
        const remitChatlistDocRef = doc(remitChatlistColl, email)
        const remitChatlistDoc = await getDoc(remitChatlistDocRef)

        const senderData = {
            email: email,
            img: user?.photoURL,
            name: user?.displayName,
            time: serverTimestamp()
        }

        if(!remitChatlistDoc.exists()){
            setDoc(remitChatlistDocRef, {...senderData, message: value})
        }else{
            updateDoc(remitChatlistDocRef, {...senderData, message: value})
        }
    }
    
    async function sendMessage(){
        const user = auth.currentUser
        // auth.onAuthStateChanged((user)=>{
        if(user){
            const senderId = user?.email as string
            const senderDoc = doc(db, senderId, "chats")
            const remitentDoc = doc(db, remitentId, "chats")
            const senderColl = collection(senderDoc, remitentId)
            const remitentColl = collection(remitentDoc, senderId)
            const messageDoc: chatsSchema = {
                name: user?.displayName as string,
                avatar: user?.photoURL as string,
                message: value,
                time: serverTimestamp() as Timestamp,
                date: serverTimestamp() as Timestamp,
                sent: serverTimestamp() as Timestamp,
                seen: false,
                email: user?.email as string
            }
            
            if(value.trim() !== ""){
                addDoc(senderColl, messageDoc)
                addDoc(remitentColl, messageDoc)
                setValue("")
                if(textareaRef.current){
                    textareaRef.current.style.height = "28px"
                }
            }
        }
        await addToChats()
    }
    
    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>){
            const inputValue = e.target.value
            setValue(inputValue)
            if(textareaRef.current){
                textareaRef.current.style.height = "28px"
                textareaRef.current.style.height = textareaRef.current.scrollHeight + "px"
            }
        }

    return(
        <div className="w-full py-2 px-2 gap-2 flex items-center justify-between sticky bottom-0" >
            <div className="flex grow w-1/2 min-h-12 items-center rounded-3xl gap-2 px-2 bg-slate-700 border-2 border-[#090512]" >
                <span className="material-symbols-rounded cursor-pointer flex items-center justify-center text-2xl h-12 self-end" >sentiment_satisfied</span>
                <textarea value={value} onChange={handleChange} ref={textareaRef} className="flex grow h-7 max-h-72 w-1/2 text-white text-xl scrollbar-none resize-none bg-transparent outline-none caret-violet-500 placeholder:text-gray-400" placeholder="Message" />
                <span className="material-symbols-rounded cursor-pointer flex items-center justify-center text-2xl h-12 self-end" >attach_file</span>
                <span className="material-symbols-rounded cursor-pointer flex items-center mr-1 justify-center text-2xl h-12 self-end" >photo_camera</span>
            </div>
            <span onClick={()=>{sendMessage()}} className="material-symbols-rounded cursor-pointer flex items-center justify-center w-12 h-12 text-2xl text-[#170D30] bg-violet-500 rounded-full icon-fill" >{true ? "send" : "mic"}</span>
        </div>
    )
}