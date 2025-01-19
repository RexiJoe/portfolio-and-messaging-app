

export default function CommunitiesPage(){
    return(
        <div className="w-full h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent" >
            <div className="flex w-full items-center px-3 py-3 border-b-8 border-black cursor-pointer" >
                <div className="w-12 h-12 rounded-lg bg-gray-500 mr-4 relative" >
                    <div className="w-6 h-6 rounded-full bg-green-400 absolute -bottom-1 -right-1 flex items-center justify-center text-lg text-slate-800 border border-slate-800 " >
                        <h1>+</h1>
                    </div>
                </div>
                <h1 className="font-roboto font-semibold" >New Community</h1>
            </div>
            
        </div>
    )
}