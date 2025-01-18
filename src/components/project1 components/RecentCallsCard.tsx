import Image from "next/image";


export default function RecentCallsCard(){
    return(
        <div className="flex w-full items-center py-2 font-roboto" >
            {
                false ? <Image  className="w-12 h-12 rounded-full bg-slate-200" src="" alt="Profile Image" />
                : 
                <span className="material-symbols-rounded rounded-full bg-slate-400 w-12 h-12 flex items-center justify-center text-6xl" style={{fontVariationSettings: "'FILL' 1"}} >account_circle</span>
            }
            <h1 className="flex flex-grow px-2" >Marcita</h1>
            <span className="material-symbols-rounded text-2xl cursor-pointer" >call</span>
        </div>
    )
}