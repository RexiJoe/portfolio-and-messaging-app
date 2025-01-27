

export default function CommunitiesPage(){
    return(
        <div className="w-full h-full bg-[#090512]g bg-black overflow-y-scroll scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent" >
            <div className="flex w-full items-center px-3 py-3 border-b-8 border-gray-900 cursor-pointer" >
                <div className="w-12 h-12 rounded-lg bg-gray-500 mr-4 relative" >
                    <div className="w-6 h-6 rounded-full bg-purple-700 absolute -bottom-1 -right-1 flex items-center justify-center text-lg text-[#090512] border border-purple-950 " >
                        <h1>+</h1>
                    </div>
                </div>
                <h1 className="font-roboto font-semibold" >New Community</h1>
            </div>
            
        </div>
    )
}