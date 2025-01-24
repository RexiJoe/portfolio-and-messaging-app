"use client"

import Image from "next/image";
import Link from "next/link";

export default function Contact({username, img, email}: {username: string, img: string, email: string}){



    return(
        <Link className="flex items-center justify-between ml-3 py-2 text-lg" href={`/KirckChat/chat/${email}`} key={email} >
            <div className="flex items-center gap-2">
                <Image className="w-12 h-12 rounded-full bg-white border border-violet-500" src={img} alt={`Contact: ${username}`} width={48} height={48}/>
                <h1>{username}</h1>
            </div>
            <div className="material-symbols-rounded text-3xl flex self-end">delete</div>
        </Link>
    )
}