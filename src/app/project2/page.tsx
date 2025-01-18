"use client"

import { auth } from "@/firebase"
import { useState } from "react"

export default function Project2(){

    const [email, setEmail] = useState("")
    
    auth.onAuthStateChanged((user)=>{ setEmail(user?.email as string) })

    return(
        <div className="w-full h-full flex" >
            Email: {email}
        </div>
    )
}