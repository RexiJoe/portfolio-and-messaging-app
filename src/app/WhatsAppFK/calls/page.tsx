import FavoritesContCard from "@/components/project1 components/FavoritesContCard";
import RecentCallsCard from "@/components/project1 components/RecentCallsCard";


export default function CallsPage(){
    return(
        <div className="w-full h-full overflow-y-scroll px-3 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent" >
            <h2 className="font-roboto font-semibold text-sm py-1 " >Favorites</h2>
            <div className="flex items-center py-2" >
                <span className="material-symbols-rounded px-3 py-2 rounded-full mr-2 bg-green-400 text-slate-900 text-xl" style={{fontVariationSettings: '"FILL" 1'}} >favorite</span>
                <h2 className="font-roboto font-semibold py-1">Add Favorite</h2>
            </div>
            <FavoritesContCard/>
            <h2 className="font-roboto font-semibold text-sm py-1 " >Recent</h2>
            <RecentCallsCard/>
        </div>
    )
}