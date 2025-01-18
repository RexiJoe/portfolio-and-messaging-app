"use client"
import { signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { useState } from "react"
import { auth } from "@/firebase"

export default function LogoutButton({styles}:{styles: string}){

    const provider = new GoogleAuthProvider()
    const [session, setSession] = useState(null)

    function signinOut(auth: any, provider: any, session: any){
        if(session){signOut(auth)}
        else{signInWithPopup(auth, provider)}
    }

    auth.onAuthStateChanged((user)=>{ setSession(user) })

    return(
      
        <button className={styles} onClick={()=>{ signinOut(auth, provider, session) }} >
            <p className="bg-black rounded-lg py-1 px-3 " >{ session ? "Log Out" : "Log In" }</p>
        </button>
    )

}