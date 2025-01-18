"use client"
import { auth } from "@/firebase"
import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { useState } from "react"

export default function AuthProvider({children}:{children: React.ReactNode}){

    const [authState, setAuthState] = useState({})

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{ 
            console.log(user, "hello")
            setAuthState(user as object)
        })

    })
    

    return( authState ? <>{children}</> : <div>not logged</div>)
}