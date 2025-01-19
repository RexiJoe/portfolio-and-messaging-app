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

    if(!authState){ return(<div className="text-red-500" >Not Logged</div>) }
    else{return(<>{children}</>)}
    

    // return( !authState ? <div>not logged</div> : <>{children}</> )
}