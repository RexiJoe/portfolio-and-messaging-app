"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

type options =
    {
        name: string,
        link: string,
        icon: string
    }

const menuOptions: options[] = [
    {
        name: "Chats",
        link: "/KirckChat",
        icon: "chat",
    },
    {
        name: "Updates",
        link: "/KirckChat/updates",
        icon: "maps_ugc",
    },
    {
        name: "Comunities",
        link: "/KirckChat/communities",
        icon: "groups",
    },
    {
        name: "Calls",
        link: "/KirckChat/calls",
        icon: "call",
    },    
]

export default function WsMenu(){

    const pathname = usePathname()

    return(
        <div className="w-full py-2 flex items-center justify-around sticky bottom-0 border-t bg-[#090512]g bg-black border-purple-950 " >
            {
                menuOptions.map(({name, link, icon})=>(
                    <Link href={link} key={link} className="flex flex-col w-18 items-center justify-items-center" >
                        <span className={`material-symbols-rounded text-3xl px-4 rounded-full ${pathname == link ? "bg-violet-400 bg-opacity-30 text-violet-200 icon-fill " : "" } `} >{icon}</span>
                        <p className="text-sm font-medium" >{name}</p>
                    </Link>
                ))
            }
        </div>
    )
}