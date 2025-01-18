import Image from "next/image";


export default function FavoritesContCard(){
    return(
        <div className="flex w-full items-center py-2 " >
            {
                false ? <Image  className="w-12 h-12 rounded-full bg-slate-200" src="" alt="Profile Image" />
                : 
                <span className="material-symbols-rounded rounded-full bg-slate-400 w-12 h-12 flex items-center justify-center text-6xl" style={{fontVariationSettings: "'FILL' 1"}} >account_circle</span>
            }
            <h2 className="flex flex-grow px-2" >Mar</h2>
            <div className="flex gap-4 font-semibold" >
                <span className="material-symbols-rounded text-2xl cursor-pointer" >call</span>
                <span className="material-symbols-rounded text-2xl cursor-pointer" >video_call</span>
            </div>
        </div>
    )
}