import AuthProvider from "@/components/AuthProvider";
import NewChatButton from "@/components/project1 components/NewChatButton";
import WsHeader from "@/components/project1 components/WsHeader";
import WsMenu from "@/components/project1 components/WsMenu";


export default function Layout({children}:{children: React.ReactNode}){

    return(
        <AuthProvider>
            <div className="flex flex-col grow w-full items-center justify-center bg-slate-400">
                <div className="bg-slate-900 w-full flex-grow sm:my-4 sm:w-[420px] sm:h-[800px] flex flex-col items-center relative">
                    <WsHeader/>
                    {children}
                    <NewChatButton/>
                    <WsMenu/>
                </div>
            </div>
        </AuthProvider>
    )
}