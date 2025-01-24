"use client"

import { useState } from "react"
import {doc, getDoc, updateDoc} from "firebase/firestore"
import {db, auth} from "@/firebase"

export default function AddContactInput(){

    const [search, setSearch] = useState("")

    async function searchUser(query: string){
        const docRef = doc(db, query, "user")
        const docSnap = await getDoc(docRef)

        if(docSnap.exists()){
            const data = docSnap.data()

            auth.onAuthStateChanged((user)=>{
                const email = user?.email as string
                const email2 = query.replace(".com", "")
                const contact = {[email2]: data}

                updateDoc(doc(db, email, "contacts"), contact)
            })
        }
        
        setSearch("")
    }

    function handlechange(e: React.ChangeEvent<HTMLInputElement>){
        const value = e.target.value
        setSearch(value)
    }

    return(
        <div className="flex items-center w-full px-4 gap-2 my-4">
            <input type="text" value={search} onChange={handlechange} className="flex grow h-9 pl-3 outline-none rounded-3xl text-white text-lg bg-slate-700 placeholder:text-gray-400" placeholder="Add a contact" />
            <div className="material-symbols-rounded text-4xl icon-fill text-violet-500 cursor-pointer" onClick={()=>{searchUser(search)}} >add_circle</div>
        </div>
    )
}