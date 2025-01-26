import Image from "next/image";
import Link from "next/link";
import { Timestamp } from "firebase/firestore";

type chatsSchema = {
    name: string,
    img: string,
    time: Timestamp,
    email: string
}

export default function ChatCard({name, img, time, email}:chatsSchema){

    const date = time.toDate().toLocaleDateString()

    return(
        <Link href={`/KirckChat/chat/${email}`} className="flex items-center justify-between pl-4 my-2 w-full h-16 cursor-pointer" >
            {
                img ? <Image  className="w-14 h-14 rounded-full bg-slate-200 border-2 border-[#090512]" src={img} alt="Profile Image" width={20} height={20} />
                : 
                <span className="material-symbols-rounded rounded-full bg-slate-400 w-12 h-12 flex items-center justify-center text-6xl" style={{fontVariationSettings: "'FILL' 1"}} >account_circle</span>
            }
            
            <div className="flex flex-col flex-grow h-full" >
                <div className="flex flex-grow h-1/2 justify-between items-center px-2 pt-1" >
                    <h1 className="font-roboto font-medium " >{name}</h1>
                    <h3 className="text-xs " >{date}</h3>
                </div>
                <div className="flex flex-grow h-1/2 items-center px-2 pb-1" >
                    <div className="w-4 h-4 bg-green-400 rounded-full mr-2 " ></div>
                    <p className="text-sm text-gray-300  " >Message goes here</p>
               </div>
            </div>
        </Link>
    )
}