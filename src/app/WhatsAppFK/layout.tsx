"use client"

import AuthProvider from "@/components/AuthProvider";
import NewChatButton from "@/components/project1 components/NewChatButton";
import WsHeader from "@/components/project1 components/WsHeader";
import WsMenu from "@/components/project1 components/WsMenu";
import ChatHeader from "@/components/project1 components/ChatHeader"
import ChatTextBar from "@/components/project1 components/ChatTextBar"
import { usePathname } from "next/navigation";


export default function Layout({children}:{children: React.ReactNode}){

    const pathname = usePathname()

    return(
        <AuthProvider>
            <div className="flex flex-col grow w-full items-center justify-center bg-slate-400">
                <div className="bg-slate-900 w-full flex-grow sm:my-4 sm:w-[420px] sm:h-[800px] flex flex-col items-center relative">
                    { pathname === "/WhatsAppFK/chat" ? <ChatHeader/> : <WsHeader/> }
                    {children}
                    { pathname === "/WhatsAppFK/chat" ? "" : <NewChatButton/> }
                    { pathname === "/WhatsAppFK/chat" ? <ChatTextBar/> : <WsMenu/> }
                </div>
            </div>
        </AuthProvider>
    )
}