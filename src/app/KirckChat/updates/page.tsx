import MyStatusCard from "@/components/project1 components/MyStatusCard";
import RecentUpdates from "@/components/project1 components/RecentUpdates";
import ViewedUpdates from "@/components/project1 components/ViewedUpdates";

export const metadata = {
    title: "Updates"
}

export default function UpdatesPage(){
    return(
        <div className="w-full h-full overflow-y-scroll px-4 bg-[#090512] scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
            <h1 className="w-full my-4 text-xl text-white font-roboto font-semibold" >Status</h1>
            <MyStatusCard/>
            <RecentUpdates/>
            <ViewedUpdates/>
        </div>
    )
}