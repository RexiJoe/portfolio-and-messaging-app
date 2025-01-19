"use client"
import { signOut, signInWithPopup, GoogleAuthProvider  } from "firebase/auth"
import { useState } from "react"
import { auth } from "@/firebase"

export default function LogoutButton({styles}:{styles: string}){

    const provider = new GoogleAuthProvider()
    const [session, setSession] = useState<object | null>(null)

    type authType = typeof auth
    type providerType = typeof provider
    type sessionType = typeof session

    auth.onAuthStateChanged((user)=>{
        console.log(user)
        setSession(user)
    })
    
    function signinOut(auth: authType, provider: providerType, session: sessionType){
        if(session){signOut(auth)}
        else{signInWithPopup(auth, provider)}
    }


    return(
      
        <button className={styles} onClick={()=>{ signinOut(auth, provider, session) }} >
            <p className="bg-black rounded-lg py-1 px-3 " >{ session ? "Log Out" : "Log In" }</p>
        </button>
    )

}