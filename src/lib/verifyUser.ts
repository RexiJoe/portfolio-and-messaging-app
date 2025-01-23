"use client"
import { auth } from "@/firebase"

export default async function verifyUser(){

    auth.onAuthStateChanged(async ()=>{

        const user = auth.currentUser
        const token = await user?.getIdToken()
        fetch("/api/auth",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({token})
        })

    })
}
