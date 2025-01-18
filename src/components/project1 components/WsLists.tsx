

export default function WsLists(){
    return(
        <div className="flex items-center justify-around w-full py-3 px-2" >
            <button className="bg-gray-800 font-medium cursor-pointer px-3 py-1 rounded-full text-sm " >All</button>
            <button className="bg-gray-800 font-medium cursor-pointer px-3 py-1 rounded-full text-sm " >Unread</button>
            <button className="bg-gray-800 font-medium cursor-pointer px-3 py-1 rounded-full text-sm " >Fafourites</button>
            <button className="bg-gray-800 font-medium cursor-pointer px-3 py-1 rounded-full text-sm " >Groups</button>
            <button className="bg-gray-800 cursor-pointer px-4 rounded-full text-xl" >+</button>
        </div>
    )
}