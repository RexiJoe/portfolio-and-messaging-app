"use client"

import { auth } from "@/firebase"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"

type optionsSchema = {
    option: string,
    link: string
}

function UserOption(){

    const [image, setImg] = useState("/iufsaduif")
    const [username, setName] = useState("hi")

    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            const img = user?.photoURL?.toString()
            const name = user?.displayName
            setImg(img as string)
            setName(name as string)
        })
    },[])

    return(
        <div className="flex gap-2 text-sm items-center" >
            <Image className="rounded-full" src={image} alt={username} width={30} height={30} />
            <h1>{username}</h1>
        </div>
    )
}

export default function OptionsMenu({optionsList}:{optionsList: optionsSchema[]}){
    
    
    const [isOpen, setIsOpen] = useState(false)

    const divRef = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        function clickOutside(event: MouseEvent){
            if(divRef.current && !divRef.current.contains(event.target as Node)){
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", clickOutside)

        return ()=>{ document.removeEventListener("mousedown", clickOutside) }

    })
    
    return(
        <div className="relative" ref={divRef}>
            <span onClick={()=>{ setIsOpen(!isOpen) }} className="material-symbols-rounded text-2xl px-2 cursor-pointer" >
                more_vert
            </span>
            <div className={`${isOpen ? "flex" : "hidden"} flex-col w-48 absolute top-10 right-2 pl-4 py-5 gap-5 rounded-xl h-auto bg-purple-950 bg-opacity-95`} >
                <UserOption/>
                {
                    optionsList.map(({option, link})=>( <Link href={link} key={option} className="cursor-pointer" >{option}</Link> ))
                }
            </div>
        </div>
    )
}