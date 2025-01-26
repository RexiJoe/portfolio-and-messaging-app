"use client"

import OptionsMenu from "./OptionsMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { useEffect, useState } from "react";
import Image from "next/image";

type optionsSchema = {
    option: string,
    link: string
}

const options: optionsSchema[] = [
    {option: "Add to contacts", link: " "},
    {option: "Search", link: " "},
    {option: "Add to list", link: " "},
    {option: "Media, links, and docs", link: " "},
    {option: "Disappearing messages", link: " "},
    {option: "Chat theme", link: " "},
    {option: "More", link: " "},
]

type userDataType = {
    email: string,
    name: string,
    img: string,
}

export default function ChatHeader(){

    const pathname = usePathname()
    const segmentedPath = pathname.split("/")
    const userId = segmentedPath[segmentedPath.length - 1]
    const [user, setUser] = useState<userDataType>()
    
    async function getUserData(){
        const docRef = doc(db, userId, "user")
        const docSnap = await getDoc(docRef)
        const data = docSnap.data() as userDataType
        setUser(data)
    }

    useEffect(()=>{
        getUserData()
    })


    return(
        <div className="flex w-full py-2 items-center justify-around bg-[#090512] border-b border-purple-950 sticky top-0 z-10">
            <div className="flex items-center justify-center pl-2 gap-1 cursor-pointer" >
                <Link href="/KirckChat" className="material-symbols-rounded text-2xl" >arrow_back</Link>
                <Image src={user?.img || "/images/userFallBack"} width={40} height={40} alt={user?.email || "User Image"} className="w-10 h-10 rounded-full bg-[#090512] border-2 border-[#090512] " />
            </div>
            <div className="flex flex-col grow px-2 cursor-pointer" >
                <h1>{user?.name}</h1>
                {/* <h2>Last seen</h2> */}
            </div>
            <span className="material-symbols-rounded text-2xl px-2 cursor-pointer" >video_call</span>
            <span className="material-symbols-rounded text-2xl px-2 cursor-pointer" >call</span>
            <OptionsMenu optionsList={options} />
        </div>
    )
}