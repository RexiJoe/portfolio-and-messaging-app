"use client"

import OptionsMenu from "./OptionsMenu";
import { usePathname } from "next/navigation";

export default function WsHeader(){

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


    const pathname = usePathname()
    
        const isTitle = (path: string): string | undefined=>{
            switch(path){
                case "/KirckChat" : return "KirckChat"
                case "/KirckChat/updates" : return "Kirck Updates"
                case "/KirckChat/communities" : return "Kirck Communities"
                case "/KirckChat/calls" : return "Kirck Calls"
                case "/KirckChat/contacts" : return "Kirck Contacts"
            }
        }

        const title = isTitle(pathname)

    return(
        <div className="flex w-full h-14 py-2 items-center justify-between bg-[#090512]g bg-black border-b border-purple-950 sticky top-0 z-10 " >
            <h1 className="pl-4 text-2xl font-medium text-white " >{title}</h1>
            <div className="flex items-center justify-between pr-1" >
                {pathname.includes("/KirckChat/contacts") ? "" : <span className="material-symbols-rounded text-2xl px-2 cursor-pointer" >photo_camera</span>}
                
                <span className="material-symbols-rounded text-2xl px-2 cursor-pointer" >search</span>

                <OptionsMenu optionsList={options} />
            </div>
        </div>
    )
}