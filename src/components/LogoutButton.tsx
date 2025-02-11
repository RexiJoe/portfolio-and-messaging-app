"use client"
import { signOut, signInWithPopup, GoogleAuthProvider  } from "firebase/auth"
import { useEffect, useState } from "react"
import { auth, db } from "@/firebase"
import { useRouter } from "next/navigation"
import { collection, getDocs, setDoc, doc } from "firebase/firestore"

export default function LogoutButton({styles}:{styles: string}){

    const router = useRouter()

    const provider = new GoogleAuthProvider()
    const [session, setSession] = useState<object | null>(null)

    type authType = typeof auth
    type providerType = typeof provider
    type sessionType = typeof session
    

    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            setSession(user)
        })
    })

    function logout(){
        signOut(auth)
        router.push("/")
    }
    
    function signinOut(auth: authType, provider: providerType, session: sessionType){
        
        if(session){logout()}
        else{
            signInWithPopup(auth, provider).then((data)=>{
                const user = data.user
                const email = user.email?.toString() as string
                const name = user.displayName
                const collectionRef = collection(db, email as string)
                const querySnapshot = getDocs(collectionRef)
                const meContact = {
                    [email]: {
                        email: email,
                        name: name as string,
                        userName: "Me",
                        img: user.photoURL as string
                    }
                }

                const docUser = {
                    email: email,
                    img: user.photoURL,
                    name: name
                }
                
                querySnapshot.then((collection)=>{
                    if(collection.empty){
                        setDoc(doc(db, email, "user"), docUser)
                        setDoc(doc(db, email, "contacts"), meContact)
                    }
                })
            })

        }
    }


    return(
      
        <button className={styles} onClick={()=>{ signinOut(auth, provider, session) }} >
            <p className="bg-black rounded-lg py-1 px-3 " >{ session ? "Log Out" : "Log In" }</p>
        </button>
    )

}