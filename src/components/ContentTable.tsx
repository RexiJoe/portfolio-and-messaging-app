import CreateItemForm from "./CreateItemForm"


export default function ContentTable(){

    const items = [
        {
            name: "Item",
            presentation: "Box",
            quantity: 2,
            minimum:3,
            buy:5,
            id: crypto.randomUUID(),
        },
        {
            name: "Item",
            presentation: "Box",
            quantity: 2,
            minimum:3,
            buy:5,
            id: crypto.randomUUID(),
        },
        {
            name: "Item",
            presentation: "Box",
            quantity: 2,
            minimum:3,
            buy:5,
            id: crypto.randomUUID(),
        },
        {
            name: "Item",
            presentation: "Box",
            quantity: 2,
            minimum:3,
            buy:5,
            id: crypto.randomUUID(),
        },
        {
            name: "Item",
            presentation: "Box",
            quantity: 2,
            minimum:3,
            buy:5,
            id: crypto.randomUUID(),
        },
        {
            name: "Item",
            presentation: "Box",
            quantity: 2,
            minimum:3,
            buy:5,
            id: crypto.randomUUID(),
        },
        {
            name: "Item",
            presentation: "Box",
            quantity: 2,
            minimum:3,
            buy:5,
            id: crypto.randomUUID(),
        },
        {
            name: "Item",
            presentation: "Box",
            quantity: 2,
            minimum:3,
            buy:5,
            id: crypto.randomUUID(),
        },
        {
            name: "Item",
            presentation: "Box",
            quantity: 2,
            minimum:3,
            buy:5,
            id: crypto.randomUUID(),
        },
        {
            name: "Item",
            presentation: "Box",
            quantity: 2,
            minimum:3,
            buy:5,
            id: crypto.randomUUID(),
        },
        {
            name: "Item",
            presentation: "Box",
            quantity: 2,
            minimum:3,
            buy:5,
            id: crypto.randomUUID(),
        },
    ]

    return(
        <div className="flex w-full justify-around " >
            <div className="w-3/5 flex flex-col mt-40 rounded-xl p-4 gap-2 border " >

                <div className="flex w-full py-1 justify-between text-slate-100 text-xl items-center px-4" >
                    <div className="flex items-center border-r-2 border-slate-300 h-9 w-2/5 pl-3 " >Name</div>
                    <div className="flex items-center border-r-2 border-slate-300 h-9 w-1/5 pl-3 " >Presentation</div>
                    <div className="flex items-center border-r-2 border-slate-300 h-9 flex-grow justify-center" >Quantity</div>
                    <div className="flex items-center border-r-2 border-slate-300 h-9 flex-grow justify-center" >Minimum</div>
                    <div className="flex items-center px-4 border-slate-300 h-9 flex-grow justify-center" >Buy</div>
                </div>

                {
                    items.map((item)=>{return <div key={item.id} className="flex w-full py-1 justify-between bg-slate-50 rounded-lgv 3  text-slate-700 border-b items-center px-4" >
                        <div className="flex items-center p-1 border-r-2 border-slate-300 h-9 w-2/5 pl-3 " >{item.name}</div>
                        <div className="flex items-center p-1 border-r-2 border-slate-300 h-9 w-1/5 pl-3 " >{item.presentation}</div>
                        <div className="flex items-center p-1 border-r-2 border-slate-300 h-9 flex-grow justify-center font-semibold " >{item.quantity}</div>
                        <div className="flex items-center p-1 border-r-2 border-slate-300 h-9 flex-grow justify-center font-semibold " >{item.minimum}</div>
                        <div className="flex items-center p-1 border-slate-300 h-9 flex-grow justify-center font-semibold " >{item.buy}</div>
                    </div>})
                }
            </div>

            <CreateItemForm/>

        </div>
    )
}