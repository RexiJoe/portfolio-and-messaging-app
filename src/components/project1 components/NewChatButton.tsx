import Link from "next/link";


export default function NewChatButton(){
    return(
        <Link href="/KirckChat/contacts" className="material-symbols-rounded cursor-pointer icon-fill flex items-center justify-center text-2xl font-bold text-gray-950 text-opacity-80 w-12 h-12 rounded-xl bg-violet-500 fixed bottom-20 right-4 sm:absolute " >
            add_comment
        </Link>
    )
}