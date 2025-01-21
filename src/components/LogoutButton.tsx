"use client"
import { signOut, signInWithPopup, GoogleAuthProvider  } from "firebase/auth"
import { useState } from "react"
import { auth } from "@/firebase"
import { useRouter } from "next/navigation"

export default function LogoutButton({styles}:{styles: string}){

    const router = useRouter()

    const provider = new GoogleAuthProvider()
    const [session, setSession] = useState<object | null>(null)

    type authType = typeof auth
    type providerType = typeof provider
    type sessionType = typeof session

    auth.onAuthStateChanged((user)=>{
        setSession(user)
    })

    function logout(){
        signOut(auth)
        router.push("/")
    }
    
    function signinOut(auth: authType, provider: providerType, session: sessionType){
        if(session){logout()}
        else{signInWithPopup(auth, provider)}
    }


    return(
      
        <button className={styles} onClick={()=>{ signinOut(auth, provider, session) }} >
            <p className="bg-black rounded-lg py-1 px-3 " >{ session ? "Log Out" : "Log In" }</p>
        </button>
    )

}