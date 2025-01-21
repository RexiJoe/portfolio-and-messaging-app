"use client"
import { auth } from "@/firebase"
// import { onAuthStateChanged } from "firebase/auth"
// import { useState } from "react"



export default async function verifyUser(){

    auth.onAuthStateChanged(async ()=>{

        
        const user = auth.currentUser

        const token = await user?.getIdToken()

        // if(token){
            const response = await fetch("/api/auth",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({token})
            })

            const data = await response.json()
            console.log(data)
        // }
        
        
    })

    
}


// const [authState, setAuthState] = useState({})

    // useEffect(()=>{
    //     onAuthStateChanged(auth, (user)=>{ 
    //         // console.log(user, "hello")
    //         setAuthState(user as object)

    //         const token = await getIdToken()

    //         console.log(token)

    //     })

    // })

    // if(!authState){ return(<div className="text-red-500" >Not Logged</div>) }
    // else{return(<>{children}</>)}
    
    // return( !authState ? <div>not logged</div> : <>{children}</> )