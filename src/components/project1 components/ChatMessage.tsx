import { usePathname } from "next/navigation"

type chatSchema = {
    message: string,
    user: string
}

export default function ChatMessage({message, user}: chatSchema){

   const pathname = usePathname()
   const segmentedPath = pathname.split("/")
   const id = segmentedPath[segmentedPath.length - 1]

    return(
        <div className={`flex justify-end items-center ${user !== id ? "self-end bg-green-900" : "bg-slate-700"} gap-2 flex-wrap w-fit max-w-64 px-2 py-1 rounded-lg`} >
            <p className="" >{message}</p>
            <p className="flex items-end min-w-fit h-full text-xs font-medium text-gray-400" >11:30 AM</p>
        </div>
    )
}