"use client"

import OptionsMenu from "./OptionsMenu";
import Link from "next/link";

export default function ChatHeader(){

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

    return(
        <div className="flex w-full py-2 items-center justify-around bg-transparent border-b border-slate-800 sticky top-0 z-10">
            <div className="flex items-center justify-center pl-2 gap-1 cursor-pointer" >
                <Link href="/WhatsAppFK" className="material-symbols-rounded text-2xl" >arrow_back</Link>
                <div className="w-10 h-10 rounded-full bg-violet-500" ></div>
            </div>
            <div className="flex flex-col grow px-2 cursor-pointer" >
                <h1>User name</h1>
                {/* <h2>Last seen</h2> */}
            </div>
            <span className="material-symbols-rounded text-2xl px-2 cursor-pointer" >video_call</span>
            <span className="material-symbols-rounded text-2xl px-2 cursor-pointer" >call</span>
            <OptionsMenu optionsList={options} />
        </div>
    )
}