import Image from "next/image";
import Link from "next/link";

type statusSchema = {
    name: string,
    lastSeen: string,
    img: string,
    link: string
}

export default function StatusCard({name, lastSeen, img, link}:statusSchema){


    return(
        <Link href={link} className="flex w-full my-2" >
            {
                img ? <Image src={img} alt="Status" className="w-12 h-12 rounded-full bg-white" /> : <span className="material-symbols-rounded rounded-full bg-slate-400 w-12 h-12 flex items-center justify-center text-4xl " >photo</span>
            }
            <div className="pl-2" >
                <h1 className="font-roboto font-semibold" >{name}</h1>
                <h2 className="font-roboto text-sm" >{lastSeen}</h2>
            </div>
        </Link>
    )
}