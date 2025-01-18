"use client"

import { useState } from "react"
import StatusCard from "../StatusCard"

type statusSchema = {
    name: string,
    lastSeen: string,
    img: string,
    link: string
}

export default function RecentUpdates(){

    const [isActive, setIsActive] = useState(true)

    const statuses: statusSchema[] = [
        {
            name: "Sofía Rodríguez",
            lastSeen: "Hace 2 minutos",
            img: "",
            link: "",
        },
        {
            name: "Mateo Fernández",
            lastSeen: "Hace 15 minutos",
            img: "",
            link: "",
        },
        {
            name: "Valentina Gómez",
            lastSeen: "Ayer a las 6:30 PM",
            img: "",
            link: "",
        },
        {
            name: "Santiago Pérez",
            lastSeen: "Hace 1 hora",
            img: "",
            link: "",
        },
        {
            name: "Isabella Torres",
            lastSeen: "Hoy a las 9:15 AM",
            img: "",
            link: "",
        },
        {
            name: "Lucas Vargas",
            lastSeen: "Hace 45 minutos",
            img: "",
            link: "",
        },
        {
            name: "Martina Castro",
            lastSeen: "Hace 5 horas",
            img: "",
            link: "",
        },
        {
            name: "Nicolás Jiménez",
            lastSeen: "Ayer a las 11:00 PM",
            img: "",
            link: "",
        },
        {
            name: "Emilia Ruiz",
            lastSeen: "Hoy a las 7:45 AM",
            img: "",
            link: "",
        },
        {
            name: "Benjamín Herrera",
            lastSeen: "Hace 10 minutos",
            img: "",
            link: "",
        },
    ];

    return(
        <div className="flex flex-col w-full cursor-pointer" >
            <h2 className="py-3 font-roboto text-sm cursor-pointer text-gray-400 font-semibold " onClick={()=>{setIsActive(!isActive)}} >Recent Updates</h2>
            <div className={`${isActive ? "flex flex-col": "hidden" } w-full`} >
                {
                    statuses.map((status)=>(<StatusCard {...status} key={status.name} />))
                }
            </div>
        </div>
    )
}