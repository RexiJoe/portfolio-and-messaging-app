"use client"
import { auth } from "@/firebase"

export default async function verifyUser(){

    auth.onAuthStateChanged(async ()=>{

        const user = auth.currentUser
        const token = await user?.getIdToken()
        const response = await fetch("/api/auth",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({token})
        })

        const data = await response.json()
        console.log(data)  
    })
}
