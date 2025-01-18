"use client"

import OptionsMenu from "./OptionsMenu";
import { usePathname } from "next/navigation";

export default function WsHeader(){

    const pathname = usePathname()
    
        const isTitle = (path: string): string | undefined=>{
            switch(path){
                case "/project1" : return "WhatsApp"
                case "/project1/updates" : return "Updates"
                case "/project1/communities" : return "Communities"
                case "/project1/calls" : return "Calls"
            }
        }

        const title = isTitle(pathname)

    return(
        <div className="flex w-full h-14 py-2 items-center justify-between bg-slate-900 border-b border-slate-800 sticky top-0 z-10 " >
            <h1 className="pl-4 text-2xl font-medium text-white " >{title}</h1>
            <div className="flex items-center justify-between pr-1" >
                <span className="material-symbols-rounded text-2xl px-2 cursor-pointer" >photo_camera</span>

                <span className="material-symbols-rounded text-2xl px-2 cursor-pointer" >search</span>

                <OptionsMenu/>
            </div>
        </div>
    )
}