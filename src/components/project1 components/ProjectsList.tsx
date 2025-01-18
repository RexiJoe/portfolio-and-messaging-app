"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import LogoutButton from "../LogoutButton"

export default function ProjectsList(){

    const pathname = usePathname()

    type projectSchema = {
        name: string,
        link:string,
    }

    const projects: projectSchema[] = [
        {
            name: "WhatsApp FK",
            link: "/project1"
        },
        {
            name: "Project2",
            link: "/project2"
        },
        {
            name: "Project3",
            link: "/project3"
        },
        {
            name: "Project4",
            link: "/project4"
        },
    ]

    return(
        <div className="flex h-auto w-full sm:w-auto items-center justify-around sm: sm:gap-0" >
            
            {
                projects.map(({name, link})=>(
                    
                    <Link href={link} className={`text-xs px-2 py-1  bg-slate-700 sm:py-1 sm:text-base sm:px-3 sm:mx-3 rounded-lg ${pathname.includes(link) ? "text-green-500" : ""}`} key={link} >{name}</Link>
                
                ))
            }

            <LogoutButton styles="flex items-center text-xs w-auto sm:hidden sm:text-base" />
        </div>
    )

}

//"text-xs sm:h-7 sm:flex-grow sm:w-24 sm:text-lg sm:mx-4 sm:px-5 rounded-xl bg-white flex items-center justify-center text-black font-bold"