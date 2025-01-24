"use client"

import AddContactInput from "@/components/project1 components/AddContactInput"
import Contact from "@/components/project1 components/Contact"
import { getDoc,doc } from "firebase/firestore"
import { auth, db } from "@/firebase"
import { useEffect, useState } from "react"

export default function ContactsPage(){

    type contactType = {
        email: string,
        name: string,
        userName: string,
        img: string
    }

    const [contacts, setContacts] = useState<contactType[]>([])

    useEffect(()=>{
        
        auth.onAuthStateChanged((user)=>{
            async function getDocuments(user: typeof auth.currentUser){
                console.log(user)
            
                if(user && user.email){
                    const docRef = doc(db, user.email, "contacts")
                    const docSnap = await getDoc(docRef)
            
                    if(docSnap.exists()){
                        const docData = docSnap.data()
                        const dataArray: contactType[] = Object.values(docData)
                        setContacts(dataArray)
                    }else{ console.log("No such document!") }
            
                }else{
                    console.log("User is not authenticated or email is undefined.")
                }
            }
            getDocuments(user)
        })

    },[])

    return(
        <div className="flex flex-col w-full grow bg-[090512] overflow-y-scroll scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent" >
            <AddContactInput/>

            <p className="ml-3 text-sm font-semibold text-gray-400 mb-4" >Contacts</p>

            {contacts.map(({name, img, email})=>{
                return(
                    
                    <Contact username={name} img={img} email={email} key={email} />
                )
            })}
        </div>
    )
}