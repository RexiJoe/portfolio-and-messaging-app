"use client"

import { FormEvent } from "react"


export default function CreateItemForm(){

    function handleForm(e: FormEvent){
        e.preventDefault()
        
        
    }

    return(
        <form onSubmit={handleForm} className="flex flex-col items-center px-6 p-4 mt-40 w-1/5 border rounded-xl h-fit " >
            <h1 className="text-3xl my-4 " >Create new item</h1>
            <label htmlFor="name" className="self-start text-sm text-gray-300 -mb-3 ml-1" >Name</label>
            <input placeholder="Name" id="name" name="Name" className="bg-slate-50 w-full rounded-xl my-3 h-10 text-slate-700 pl-3 placeholder:text-sm outline-none " type="text" />

            <label htmlFor="presentation" className="self-start text-sm text-gray-300 -mb-3 ml-1" >Presentation</label>
            <input placeholder="Presentation" id="presentation" className="bg-slate-50 w-full rounded-xl my-3 h-10 text-slate-700 pl-3 placeholder:text-sm outline-none " type="text" />

            <label htmlFor="quantity" className="self-start text-sm text-gray-300 -mb-3 ml-1" >Quantity</label>
            <input placeholder="Quantity" id="quantity" className="bg-slate-50 w-full rounded-xl my-3 h-10 text-slate-700 pl-3 placeholder:text-sm outline-none " type="number" />

            <label htmlFor="minimum" className="self-start text-sm text-gray-300 -mb-3 ml-1" >Minimum</label>
            <input placeholder="Minimum" id="minimum" className="bg-slate-50 w-full rounded-xl my-3 h-10 text-slate-700 pl-3 placeholder:text-sm outline-none " type="number" />

            <label htmlFor="buy" className="self-start text-sm text-gray-300 -mb-3 ml-1" >Buy</label>
            <input placeholder="Buy" id="buy" className="bg-slate-50 w-full rounded-xl my-3 h-10 text-slate-700 pl-3 placeholder:text-sm outline-none " type="number" />

            <button className="h-16 w-full rounded-xl border mx-2 mt-4 font-semibold text-xl cursor-pointer flex items-center justify-center " ><h1 className="hover:text-transparent bg-clip-text bg-gradient-to-l from-green-400 via-blue-500 to-purple-600" >Create</h1></button>
        </form>
    )
}