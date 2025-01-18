"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"


export default function UserMenu(){

    const options = [
        {name: "Account", link: "/account"},
        {name: "Settings", link: "/settings"},
        {name: "Friends", link: "/friends"},
        {name: "Followers", link: "/followers"},
        {name: "Photos", link: "/photos"},
        {name: "Videos", link: "/videos"},
        {name: "Posts", link: "/posts"},
    ]

     const [isActive,setIsActive] = useState(false)

     const divRef = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        function handleClickOutside(event: MouseEvent){
            if(divRef.current && !divRef.current.contains(event.target as Node)){
                setIsActive(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)

        return ()=>{document.removeEventListener("mousedown", handleClickOutside)}

    },[])

    return(
        <div ref={divRef} className="flex items-center justify-center rounded-xl mx-3 px-3 relative cursor-pointer " >
            <div className="flex items-center justify-center" onClick={()=> setIsActive(!isActive)} >
                <div className="bg-white h-8 w-8 mx-2 rounded-full " ></div>
                <h2>Joseph Morningstar</h2>
            </div>

            <div className={` ${isActive ? "flex" : "hidden"} flex-col w-full absolute top-10 bg-black rounded-xl border mt-2 pb-2`} >
                <div className="flex items-center justify-center border-b mx-3 mb-4 " >
                    <div className="bg-white h-8 w-8 mr-2 my-2 rounded-full " ></div>
                    <h2>Joseph Morningstar</h2>
                </div>
                {
                    options.map((option)=>{return <div key={option.name} className="mx-4 mb-1 p-1 rounded-xl hover:bg-white/10 hover:text-transparent pl-2 " ><Link href={option.link} className="bg-clip-text bg-gradient-to-l from-green-400 via-blue-500 to-purple-600" >{option.name}</Link></div>} )
                }
                
            </div>
        </div>
    )
}