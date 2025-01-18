import UserMenu from "./UserMenu";


export default function HomeHeader(){
    return(
        <div className="w-full h-12 flex items-center justify-between border-b  " >
            <div className="h-full flex items-center justify-center mx-4 font-bold text-xl " >
                <h2>Home App</h2>
            </div>
            <div className="w-1/4" >
                <input className="h-8 w-full pl-2 rounded-xl text-slate-800 placeholder:text-slate-500 outline-none " type="text" placeholder="Search" />
            </div>
            <UserMenu/>
        </div>
    )
}