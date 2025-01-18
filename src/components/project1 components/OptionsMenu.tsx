"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"


export default function OptionsMenu(){
    
    type optionsSchema = {
        option: string,
        link: string
    }

    const options: optionsSchema[] = [
        {
            option: "New Group",
            link: "/project1/options/new-group"
        },
        {
            option: "New broadcast",
            link: "/project1/options/new-broadcast"
        },
        {
            option: "Linked devices",
            link: "/project1/options/linked-devices"
        },
        {
            option: "Starred messages",
            link: "/project1/options/starred-messages"
        },
        {
            option: "Settings",
            link: "/project1/options/settings"
        },
    ]

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
        <div className="relative" >
            <span onClick={()=>{ setIsOpen(!isOpen) }} className="material-symbols-rounded text-2xl px-2 cursor-pointer" >
                more_vert
            </span>
            <div ref={divRef} className={`${isOpen ? "flex" : "hidden"} flex-col w-48 absolute top-10 right-2 pl-4 py-5 gap-5 rounded-xl h-auto bg-slate-800 bg-opacity-95`} >
                {
                    options.map(({option, link})=>( <Link href={link} key={link} className="cursor-pointer" >{option}</Link> ))
                }
            </div>
        </div>
    )
}