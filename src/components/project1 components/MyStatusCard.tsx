import Image from "next/image"


export default function MyStatusCard(){

    const statusImg: string = ""

    return(
        <div className="flex w-full cursor-pointer " >
            <div className="relative w-12 h-12 rounded-full bg-white mr-4" >
                {
                    statusImg ? <Image src={statusImg} alt="Status" className="w-12 h-12 rounded-full bg-white" /> : <span className="material-symbols-rounded rounded-full bg-slate-400 w-12 h-12 flex items-center justify-center text-4xl " >photo</span>
                }
                <div className="w-6 h-6 rounded-full bg-purple-700 absolute -bottom-1 -right-1 flex items-center justify-center text-lg text-[#090512]  border border-purple-950 " >
                    <h1>+</h1>
                </div>
            </div>
            <div>
                <h1 className="font-roboto font-semibold" >My Status</h1>
                <h2 className="font-roboto text-sm" >Tap to add status update</h2>
            </div>
        </div>
    )
}